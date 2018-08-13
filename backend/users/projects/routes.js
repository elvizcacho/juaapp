const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/user/projects', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserProjects(req, res));
  app.get('/user/projects/:projectId', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserProjectById(req, res));
}
