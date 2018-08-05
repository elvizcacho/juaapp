const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/users/:id/projects', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserProjects(req, res));
}
