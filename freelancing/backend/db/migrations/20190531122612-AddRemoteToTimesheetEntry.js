'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
        'TimesheetEntries',
        'remote', Sequelize.BOOLEAN
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
        'TimesheetEntries',
        'remote'
    );
  }
};
