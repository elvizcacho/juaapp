'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Users',
      'street', Sequelize.STRING
    );
    queryInterface.addColumn(
      'Users',
      'houseNumber', Sequelize.STRING
    );
    queryInterface.addColumn(
      'Users',
      'postalCode', Sequelize.STRING
    );
    queryInterface.addColumn(
      'Users',
      'city', Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Users',
      'street'
    );
    queryInterface.removeColumn(
      'Users',
      'houseNumber'
    );
    queryInterface.removeColumn(
      'Users',
      'postalCode'
    );
    queryInterface.removeColumn(
      'Users',
      'city'
    );
  }
};
