const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/user/projects/:projectId/timesheets', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserTimesheetsByProjectId(req, res));
}
