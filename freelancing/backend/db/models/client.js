'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    street: DataTypes.STRING,
    houseNumber: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Project);
  };
  return Client;
};