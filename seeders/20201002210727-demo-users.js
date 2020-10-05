'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        location: 'iowa',
        description: 'farmer',
        img: '',
        username: 'johndoe',
        password: 'deere1'
        },
        {
        name: 'Jane Doe',
        location: 'illinois',
        description: 'dairy farmer',
        img: '',
        username: 'janedoe',
        password: 'deere2'
        },
        {
          name: 'john johnson',
          location: 'minnesota',
          description: 'contractor',
          img: '',
          username: 'johnjohnson',
          password: 'deere3'
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
