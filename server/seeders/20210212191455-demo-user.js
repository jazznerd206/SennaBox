'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'indoor@example.com',
        username: 'Fernus Dryan',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'outdoor@example.com',
        username: 'Douglas Fir',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'lowlight@example.com',
        username: 'Zuko Dragon',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};