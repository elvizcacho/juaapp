const Client = require('../db/models/index').Client;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getClients(req, res) {
  //const user = new User(req.user); // TODO: check user is admin
  Client.findAll()
  .then(clients => {
    res.send(clients);
  });
}

module.exports.getClients = getClients;