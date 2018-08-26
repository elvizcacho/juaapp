'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  var TimesheetEntry = sequelize.define('TimesheetEntry', {
    TimesheetId: DataTypes.INTEGER,
    date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    checkIn: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    checkOut: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    pause: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    hours: {
      type: DataTypes.REAL,
      validate: {
        notEmpty: true
      }
    },
    comments: DataTypes.STRING
  }, {});
  TimesheetEntry.associate = function(models) {
    models.TimesheetEntry.belongsTo(models.Timesheet);
  };
  TimesheetEntry.isValid = function(timesheetEntry) {
    return timesheetEntry.date && timesheetEntry.checkIn && timesheetEntry.checkOut;
  }
  TimesheetEntry.calculateHours = function(timesheetEntry) {
    const checkIn = moment(timesheetEntry.checkIn);
    const checkOut = moment(timesheetEntry.checkOut);
    const duration = moment.duration(checkOut.diff(checkIn) - timesheetEntry.pause * 60000);
    return duration.asHours();
  }
  return TimesheetEntry;
};