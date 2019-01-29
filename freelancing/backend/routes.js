
module.exports = (app) => {
  
  require('./login').routes(app);

  // clients routes
  require('./clients').routes(app);

  // user routes
  require('./users').routes(app);
  require('./users/projects').routes(app);
  require('./users/timesheets').routes(app);
  require('./users/invoices').routes(app);
  
  app.get('/', (req, res) => res.send('Routes loaded'));
  
}