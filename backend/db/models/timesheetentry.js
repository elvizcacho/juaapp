'use strict';
module.exports = (sequelize, DataTypes) => {
  var TimesheetEntry = sequelize.define('TimesheetEntry', {
    TimesheetId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    pause: DataTypes.INTEGER,
    hours: DataTypes.REAL,
    comments: DataTypes.STRING
  }, {});
  TimesheetEntry.associate = function(models) {
    models.TimesheetEntry.belongsTo(models.Timesheet);
  };
  return TimesheetEntry;
};