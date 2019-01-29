'use strict';
module.exports = (sequelize, DataTypes) => {
  var Timesheet = sequelize.define('Timesheet', {
    ProjectId: DataTypes.INTEGER,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Timesheet.associate = function(models) {
    models.Timesheet.belongsTo(models.Project);
    models.Timesheet.hasMany(models.TimesheetEntry);
  };
  return Timesheet;
};