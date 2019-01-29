const bodyParser = require('body-parser');
const passport = require('passport');
const controller = require('./controller');


module.exports = (app) => {
  
  app.post('/user/invoices/pdf', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.exportInvoiceAsPDFByTimesheetId(req, res));
  
}
