
module.exports = (app) => {
  
  require('./logIn').routes(app);
  
  app.get('/', (req, res) => res.send('Hello World!XX'));
  
}