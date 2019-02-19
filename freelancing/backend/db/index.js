const Sequelize = require('sequelize');
const config = require('../config')
console.log(config);
console.log('AQUI')
const sequelize = new Sequelize(
    config.db.db,
    config.db.user,
    config.db.password,
    {
      host: config.db.host,
      dialect: 'postgres',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  module.exports = sequelize;