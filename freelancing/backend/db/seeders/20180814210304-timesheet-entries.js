'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TimesheetEntries', [{
      TimesheetId: 1,
      date: '04-02-2018',
      checkIn: '2018-04-02T09:00:00.000Z',
      checkOut: '2018-04-02T18:00:00.000Z',
      pause: 60,
      hours: 8,
      comments: 'I worked on ticket PRIV-22',
      remote: false
    },
    {
      TimesheetId: 1,
      date: '04-03-2018',
      checkIn: '2018-04-03T09:00:00.000Z',
      checkOut: '2018-04-03T18:00:00.000Z',
      pause: 60,
      hours: 8,
      comments: 'I worked on ticket PRIV-22',
      remote: false
    },
    {
      TimesheetId: 1,
      date: '04-04-2018',
      checkIn: '2018-04-04T09:00:00.000Z',
      checkOut: '2018-04-04T18:00:00.000Z',
      pause: 60,
      hours: 8,
      comments: 'I worked on ticket PRIV-22',
      remote: false
    },
    {
      TimesheetId: 1,
      date: '04-05-2018',
      checkIn: '2018-04-05T09:00:00.000Z',
      checkOut: '2018-04-05T18:00:00.000Z',
      pause: 60,
      hours: 8,
      comments: 'I worked on ticket PRIV-22',
      remote: true
    },
    {
      TimesheetId: 1,
      date: '04-06-2018',
      checkIn: '2018-04-06T09:00:00.000Z',
      checkOut: '2018-04-06T18:00:00.000Z',
      pause: 60,
      hours: 8,
      comments: 'I worked on ticket PRIV-22',
      remote: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TimesheetEntries', null, {});
  }
};
