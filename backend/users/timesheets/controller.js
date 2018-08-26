const User = require('../../db/models').User;
const TimesheetEntry = require('../../db/models').TimesheetEntry;
const Timesheet = require('../../db/models').Timesheet;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');

function getUserTimesheetsByProjectId(req, res) {
  
  const user = new User(req.user);
  
  user.getProjects({ where: {id: req.params.projectId }})
  .then(projects => {
    return projects[0].getTimesheets();
  })
  .then(timesheets => res.send(timesheets));
  
}

function getUserTimesheetByTimesheetId(req, res) {
  // TODO: add user association to timesheets and timesheetEntries
  Timesheet.findById(req.params.timesheetId)
  .then(timesheet => {
    const from = moment(timesheet.from);
    const to = moment(timesheet.to);
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
    timesheet.getTimesheetEntries()
    .then(timeSheetEntries => {
      timeSheetEntriesSquema = timeSheetEntriesSquema.map(timeSheetEntrySquema => {
        const timeSheetEntryToBeMerged = timeSheetEntries.find(timeSheetEntry => moment(timeSheetEntry.date).isSame(timeSheetEntrySquema.date))
        if (timeSheetEntryToBeMerged) { // make the entries arrays to support multiple timesheetEntries per day
          return timeSheetEntryToBeMerged;
        }
        return timeSheetEntrySquema;
      })
      timesheet.dataValues.entries = timeSheetEntriesSquema;
      res.send(timesheet);
    });
  });
  
}

function createTimeSheetByMonthDate(req, res) {
  const monthDate = req.body.monthDate;
  const projectId = req.body.projectId;
  Timesheet.create({
    ProjectId: projectId,
    from: moment(monthDate),
    to: moment(monthDate).endOf('month'),
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
    return TimesheetEntry.upsert(timesheetEntryToSave, { id: timesheetEntryToSave.id });
  }))
  .then(result => {
    getUserTimesheetByTimesheetId(req, res);
  })
  .catch(e => res.send(e));
  
}



module.exports.getUserTimesheetsByProjectId = getUserTimesheetsByProjectId;
module.exports.getUserTimesheetByTimesheetId = getUserTimesheetByTimesheetId;
module.exports.createTimeSheetByMonthDate = createTimeSheetByMonthDate;
module.exports.updateUserTimesheetByTimesheetId = updateUserTimesheetByTimesheetId;
