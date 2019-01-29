'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        email: 'elvizcacho@gmail.com',
        firstName: 'Juan',
        lastName: 'Vizcaino',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        street: 'Sprollstraße',
        houseNumber: '54A',
        postalCode: '70597',
        city: 'city',
        phoneNumber: '+491638119175',
        taxNumber: '2357100863',
        vatNumber: 'DE310799763',
        iban: 'DE98100110012629536518',
        bankName: 'N26 Bank',
        bankAddress: 'Klosterstraße 62, 10179 Berlin',
        bankSwiftCode: 'NTSBDEB1XXX'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
