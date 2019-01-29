const bodyParser = require('body-parser');
const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/user/projects', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserProjects(req, res));
  app.post('/user/projects', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.createProject(req, res));
  app.get('/user/projects/:projectId', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserProjectById(req, res));
  app.delete('/user/projects/:projectId', passport.authenticate('jwt', {session: false}), (req, res) => controller.deleteProject(req, res));
}