

function logIn(req, res) {
  res.send({ok: 'ok'});
}

function logOut(req, res) {
  res.send('Here logOut '); 
}

function isTokenValid(req, res) {
  res.send('Here isUserLoggedIn ');
}

module.exports.logIn = logIn;
module.exports.logOut = logOut;
module.exports.isTokenValid = isTokenValid;
