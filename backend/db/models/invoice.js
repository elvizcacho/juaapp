'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    TimesheetId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ClientId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Invoice.associate = function(models) {
    models.Invoice.belongsTo(models.Timesheet);
    models.Invoice.belongsTo(models.User);
    models.Invoice.belongsTo(models.Project);
    models.Invoice.belongsTo(models.Client);
  };
  return Invoice;
};