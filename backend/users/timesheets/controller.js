const User = require('../../db/models').User;
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

module.exports.getUserTimesheetsByProjectId = getUserTimesheetsByProjectId;
