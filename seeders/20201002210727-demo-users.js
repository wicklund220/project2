'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        username: 'johndoe',
        password: 'deere1'
        },
        {
        name: 'Jane Doe',
        username: 'janedoe',
        password: 'deere2'
        },
        {
          name: 'john johnson',
          username: 'johnjohnson',
          password: 'deere3'
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
