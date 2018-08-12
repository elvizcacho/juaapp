
module.exports = (app) => {
  
  require('./login').routes(app);
  require('./users').routes(app);
  require('./projects').routes(app);
  
  app.get('/', (req, res) => res.send('Routes loaded'));
  
}