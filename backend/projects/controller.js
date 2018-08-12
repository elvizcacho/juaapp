const User = require('../db/models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getProjectsByUserId(req, res) {
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

module.exports.getProjectsByUserId = getProjectsByUserId;