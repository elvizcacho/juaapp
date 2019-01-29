'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Clients', [{
        name: 'K2 Partnering Solutions Deutschland GmbH',
        street: 'Schillerstr.',
        houseNumber: '2',
        postalCode: '60313',
        city: 'Frankfurt',
        email: 'gezerskyte@k2partnering.com',
        phoneNumber: '+491638119134',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
