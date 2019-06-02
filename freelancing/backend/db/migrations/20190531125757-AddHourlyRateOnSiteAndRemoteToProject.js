'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
        'Projects',
        'hourlyRateRemote', Sequelize.DECIMAL
    );
    queryInterface.addColumn(
        'Projects',
        'hourlyRateOnSite', Sequelize.DECIMAL
    );
    queryInterface.removeColumn(
        'Projects',
        'hourlyRate', Sequelize.DECIMAL
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
        'Projects',
        'hourlyRateRemote', Sequelize.DECIMAL
    );
    queryInterface.removeColumn(
        'Projects',
        'hourlyRateOnSite', Sequelize.DECIMAL
    );
    queryInterface.addColumn(
        'Projects',
        'hourlyRate', Sequelize.DECIMAL
    );
  }
};
