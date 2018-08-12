const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/user/projects', passport.authenticate('jwt', {session: false}), (req, res) => controller.getProjectsByUserId(req, res));
}
