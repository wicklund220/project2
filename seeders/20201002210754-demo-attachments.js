'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Attachments', [{
      division: 'agriculture',
      modelName: '440R',
      application: 'Tractor',
      description: 'utility loading purposes',
      img: 'https://i.imgur.com/4k3TqoJm.jpg'
    },
    {
      division: 'agriculture',
      modelName: 'HD50R',
      application: 'Draper Platform',
      description: 'Used on a combine for harvesting small grains',
      img: 'https://i.imgur.com/neWOWOUm.jpg'
    },
    {
      division: 'agriculture',
      modelName: 'C18F',
      application: 'Corn head',
      description: 'Used on a combine for harvesting corn',
      img: 'https://i.imgur.com/EyKMrbym.jpg'
    },
    {
      division: 'agriculture',
      modelName: '2660VT',
      application: 'Vertical tillage tool',
      description: 'Multiseasonal tillage, turning over soil',
      img: 'https://i.imgur.com/cZ5EXWhm.jpg'
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Attachments', null, {});
  }
};
