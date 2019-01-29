const Client = require('../db/models/index').Client;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getClients(req, res) {
  //const user = new User(req.user); // TODO: check if user is admin
  Client.findAll()
  .then(clients => {
    res.send(clients);
  });
}

function createClient(req, res) {
  Client.create({
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      houseNumber: req.body.houseNumber,
      postalCode: req.body.postalCode,
      city: req.body.city
  }).then(client => res.send(client));
}

function deleteClient(req, res) {
    Client.destroy({
        where: {
            id: req.params.clientId
        }
    }).then(() => res.send({ok: 'ok'}));
}

module.exports.getClients = getClients;
module.exports.createClient = createClient;
module.exports.deleteClient = deleteClient;
