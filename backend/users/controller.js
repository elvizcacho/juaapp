const User = require('../db/models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getUserProjects(req, res) {
  User
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(user => {
      return user.getProjects();
    })
    .then(projects => res.send(projects));
  
}

module.exports.getUserProjects = getUserProjects;