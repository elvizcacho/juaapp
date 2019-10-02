const User = require('../../db/models').User;
const Client = require('../../db/models').Client;
const TimesheetEntry = require('../../db/models').TimesheetEntry;
const Timesheet = require('../../db/models').Timesheet;
const Project = require('../../db/models').Project;
const moment = require('moment-timezone');
const PdfService = require('../../services').PdfService;

function getUserTimesheetsByProjectId(req, res) {

  const user = new User(req.user);

  user.getProjects({
      where: {
        id: req.params.projectId
      }
    })
    .then(projects => {
      return projects[0].getTimesheets();
    })
    .then(timesheets => res.send(timesheets));

}

function getUserTimesheetByTimesheetId(req, res) {
  // TODO: add user association to timesheets and timesheetEntries
  return Timesheet.findById(req.params.timesheetId)
    .then(timesheet => {
      const from = moment(timesheet.from).tz('Europe/Berlin');
      const to = moment(timesheet.to).tz('Europe/Berlin');
      const monthDays = to.diff(from, 'days') + 1;
      let timeSheetEntriesSquema = [];
      for (let i = 0; i < monthDays; i++) {
        timeSheetEntriesSquema.push({
          id: null,
          TimesheetId: timesheet.id,
          date: moment(from).add(i, 'days'),
          checkIn: null,
          checkOut: null,
          pause: 0,
          hours: 0,
          comments: null
        });
      }
      return timesheet.getTimesheetEntries({
          raw: true
        })
        .then(timeSheetEntries => {
          timeSheetEntriesSquema = timeSheetEntriesSquema.map(timeSheetEntrySquema => {
            const timeSheetEntryToBeMerged = timeSheetEntries.find(timeSheetEntry => moment(timeSheetEntry.date).isSame(timeSheetEntrySquema.date));
            if (timeSheetEntryToBeMerged) { // make the entries arrays to support multiple timesheetEntries per day
              return timeSheetEntryToBeMerged;
            }
            return timeSheetEntrySquema;
          });
          timesheet.dataValues.entries = timeSheetEntriesSquema;
          if (req.internal) {
            return timesheet;
          }
          res.send(timesheet);
        });
    });

}

function createTimeSheetByMonthDate(req, res) {
  const monthDate = req.body.monthDate;
  const projectId = req.body.projectId;
  Timesheet.create({
      ProjectId: projectId,
      from: moment(monthDate).tz('Europe/Berlin'),
      to: moment(monthDate).tz('Europe/Berlin').endOf('month'),
      status: 'open'
    })
    .then(timesheet => {
      req.params.timesheetId = timesheet.id;
      getUserTimesheetByTimesheetId(req, res);
    });
}

function updateUserTimesheetByTimesheetId(req, res) {

  const timesheet = req.body;
  const timesheetEntriesToSave = timesheet.entries.filter(entry => TimesheetEntry.isValid(entry));

  Promise.all(timesheetEntriesToSave.map(timesheetEntryToSave => {
      timesheetEntryToSave.hours = TimesheetEntry.calculateHours(timesheetEntryToSave);
      return TimesheetEntry.upsert(timesheetEntryToSave, {
        id: timesheetEntryToSave.id
      });
    }))
    .then(() => {
      getUserTimesheetByTimesheetId(req, res);
    })
    .catch(e => res.send(e));

}

function closeTimesheetByTimesheetId(req, res) {
  Timesheet.findById(req.params.timesheetId)
    .then(timesheet => {
      timesheet.status = 'closed';
      return timesheet.save();
    })
    .then(() => {
      getUserTimesheetByTimesheetId(req, res);
    });
}

function formatEntriesForPdf(entry) {
  if (moment(entry.date).isValid()) entry.date = moment(entry.date).tz('Europe/Berlin').format('DD.MM.YYYY'); // TODO: format must be set by client
  if (moment(entry.checkIn).isValid()) entry.checkIn = moment(entry.checkIn).tz('Europe/Berlin').format('HH:mm');
  if (moment(entry.checkOut).isValid()) entry.checkOut = moment(entry.checkOut).tz('Europe/Berlin').format('HH:mm');
  entry.remote = entry.remote ? '✓' : '-';
  return entry;
}

function formatTimesheetForPdf(timesheet, user) {
  // format entries
  timesheet.filename = `${moment().tz('Europe/Berlin').format('MM-YYYY')}.pdf`
  timesheet.entries.map(formatEntriesForPdf);
  timesheet.totalHours = timesheet.entries.reduce((acum, entry) => {
    acum += entry.hours;
    return acum;
  }, 0);
  timesheet.avgHoursProTag = timesheet.totalHours / timesheet.entries.filter(entry => entry.id).length; // TODO: modify this for multiple entries per day
  timesheet.date = moment().tz('Europe/Berlin').format('DD.MM.YYYY'); // TODO: format must be set by client
  timesheet.month = moment(timesheet.from).tz('Europe/Berlin').format('MM-YYYY');
  return Project.findOne({
      where: {
        id: timesheet.ProjectId
      },
      include: [{
        model: Client,
        attributes: ['name']
      }]
    })
    .then(project => {
      timesheet.project = project.dataValues;
      timesheet.project.Client = timesheet.project.Client.toJSON();
      timesheet.freelancer = {
        firstName: user.firstName,
        lastName: user.lastName
      };
      return timesheet;
    });

}

function exportTimesheetAsPDFByTimesheetId(req, res) {
  req.internal = true;

  getUserTimesheetByTimesheetId(req, res)
    .then(timesheet => formatTimesheetForPdf(timesheet.dataValues, req.user))
    .then(timesheet => {
        console.log('Content-Disposition', `attachment; filename="${timesheet.filename}"`)

        const a = PdfService.getPdf('timesheet.handlebars', timesheet)
        res.header('Content-Disposition', `attachment; filename="${timesheet.filename}"`)
            a.pipe(res)
    }).catch(e => console.log(e));

}



module.exports.getUserTimesheetsByProjectId = getUserTimesheetsByProjectId;
module.exports.getUserTimesheetByTimesheetId = getUserTimesheetByTimesheetId;
module.exports.createTimeSheetByMonthDate = createTimeSheetByMonthDate;
module.exports.updateUserTimesheetByTimesheetId = updateUserTimesheetByTimesheetId;
module.exports.closeTimesheetByTimesheetId = closeTimesheetByTimesheetId;
module.exports.exportTimesheetAsPDFByTimesheetId = exportTimesheetAsPDFByTimesheetId;