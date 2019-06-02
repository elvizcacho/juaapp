'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
        name: 'Evia Full Stack Developer',
        startDate: '04-01-2018',
        endDate: '08-31-2018',
        hourlyRateOnSite: '70',
        hourlyRateRemote: '63',
        paymentMonthDay: 21,
        ClientId: 1,
        contactEmail: 'stefan.selzan@evia.de',
        contactPhoneNumber: '+491638119176',
        street: 'Am Wallgraben',
        houseNumber: '100',
        postalCode: '70565',
        city: 'Stuttgart',
        description: 'Software development services'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
