'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Clients', [{
        name: 'K2 Partnering Solutions Deutschland GmbH',
        address: 'Schillerstr. 2 60313 Frankfurt',
        email: 'gezerskyte@k2partnering.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
