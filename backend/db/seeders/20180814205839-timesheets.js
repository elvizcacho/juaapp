'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Timesheets', [{
      ProjectId: 1,
      from: '04-01-2018',
      to: '04-30-2018',
      status: 'closed'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Timesheets', null, {});
  }
};
