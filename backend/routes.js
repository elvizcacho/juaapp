
module.exports = (app) => {
  
  require('./login').routes(app);
  require('./users').routes(app);
  
  app.get('/', (req, res) => res.send('Routes loaded'));
  
}