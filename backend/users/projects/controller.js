const User = require('../../db/models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getUserProjects(req, res) {
  const user = new User(req.user);
  user.getProjects()
  .then(projects => {
    projects = projects.map(project => {
      delete project.dataValues.UserProject;
      return project;
    })
    res.send(projects)
  });
  
}

function getUserProjectById(req, res) {
  const user = new User(req.user);
  user.getProjects({ where: {id: req.params.projectId }})
  .then(projects => {
    projects = projects.map(project => {
      delete project.dataValues.UserProject;
      project.dataValues.periods = project.getPeriods();
      return project;
    });
    res.send(projects[0]);
  });
}

module.exports.getUserProjects = getUserProjects;
module.exports.getUserProjectById = getUserProjectById;