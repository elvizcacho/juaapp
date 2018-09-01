'use strict';
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Project);
  };
  return Client;
};