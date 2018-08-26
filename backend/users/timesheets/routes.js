const bodyParser = require('body-parser');
const passport = require('passport');
const controller = require('./controller');


module.exports = (app) => {
  
  app.get('/user/projects/:projectId/timesheets', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserTimesheetsByProjectId(req, res));
  app.get('/user/timesheets/:timesheetId', passport.authenticate('jwt', {session: false}), (req, res) => controller.getUserTimesheetByTimesheetId(req, res));
  app.put('/user/timesheets/:timesheetId', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.updateUserTimesheetByTimesheetId(req, res));
  app.post('/user/timesheets', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.createTimeSheetByMonthDate(req, res));
  
}
