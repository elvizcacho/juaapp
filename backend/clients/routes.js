const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/clients', passport.authenticate('jwt', {session: false}), (req, res) => controller.getClients(req, res));
}
