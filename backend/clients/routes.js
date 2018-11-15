const controller = require('./controller');
const passport = require('passport');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.get('/clients', passport.authenticate('jwt', {session: false}), (req, res) => controller.getClients(req, res));
  app.post('/clients', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.createClient(req, res));
  app.delete('/clients/:clientId', passport.authenticate('jwt', {session: false}), (req, res) => controller.deleteClient(req, res));
}
