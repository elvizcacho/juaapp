const jwt = require('jsonwebtoken');
const passport = require('passport');

function logIn(req, res) {
  
  passport.authenticate('local', {session: false}, (err, user, info) => {
    
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }
    
    req.login(user, {session: false}, (err) => {
      
      if (err) {
        res.send(err);
      }
      
      const token = jwt.sign(user, process.env.JWT_SECRET);
      res.header('x-juaapp-jwt', token);
      
      return res.json(user);
      
    });
    
  })(req, res);
}

module.exports.logIn = logIn;
