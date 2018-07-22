const User = require('./users').model;
const UserSeeds = require('./users').seeds;



if (false) {
  User.sync({force: true}).then(() => Promise.all(UserSeeds.map(seed => User.create(seed))));
} else {
  
  
}