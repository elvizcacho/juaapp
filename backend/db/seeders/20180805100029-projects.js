'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
        name: 'Evia Full Stack Developer',
        startDate: '04-01-2018',
        endDate: '08-31-2018',
        hourlyRate: '62',
        paymentMonthDay: 21,
        ClientId: 1,
        contactEmail: 'stefan.selzan@evia.de',
        address: 'Am Wallgraben 100, 70565, Stuttgart',
        description: 'Software development services'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
