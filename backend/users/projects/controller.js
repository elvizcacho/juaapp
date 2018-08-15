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
    const project = projects[0];
    delete project.dataValues.UserProject;
    return project.addPeriods();
  })
  .then(projectWithPeriods => res.send(projectWithPeriods));
}

module.exports.getUserProjects = getUserProjects;
module.exports.getUserProjectById = getUserProjectById;