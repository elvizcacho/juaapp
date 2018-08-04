'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        email: 'elvizcacho@gmail.com',
        firstName: 'Juan',
        lastName: 'Vizcaino',
        password: '5f4dcc3b5aa765d61d8327deb882cf99'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
