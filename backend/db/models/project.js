'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    hourlyRate: DataTypes.DECIMAL,
    ClientId: DataTypes.INTEGER,
    contactEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    paymentMonthDay: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    models.Project.belongsToMany(models.User, {through: 'UserProject'});
  };
  return Project;
};