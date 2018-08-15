const User = require('../../db/models').User;
const TimesheetEntry = require('../../db/models').TimesheetEntry;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getUserTimesheetsByProjectId(req, res) {
  
  const user = new User(req.user);
  
  user.getProjects({ where: {id: req.params.projectId }})
  .then(projects => {
    return projects[0].getTimesheets();
  })
  .then(timesheets => res.send(timesheets));
  
}

function getUserTimesheetEntriesByTimesheetId(req, res) {
  // TODO: add user association to timesheets and timesheetEntries
  TimesheetEntry.findAll({
    where: {
      TimesheetId: req.params.timesheetId
    }
  })
  .then(timesheetEntries => res.send(timesheetEntries));
  
}

module.exports.getUserTimesheetsByProjectId = getUserTimesheetsByProjectId;
module.exports.getUserTimesheetEntriesByTimesheetId = getUserTimesheetEntriesByTimesheetId;
