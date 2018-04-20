'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
        first_name: 'John',
        last_name: 'Doe',
        gender: 'male',
        birthday: '10 June 1992',
        email: 'jondo@google.com',
        phone: '081234567891',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Kuro',
        last_name: 'Neko',
        gender: 'female',
        birthday: '10 April 1993',
        email: 'kucingitem@google.com',
        phone: '089123648281',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Mari',
        last_name: 'Maria',
        gender: 'female',
        birthday: '1 January 1990',
        email: 'mari@live.com',
        phone: '081111144444',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
