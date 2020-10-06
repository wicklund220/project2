'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Equipment', [{
      division: 'agriculture',
      modelName: '8RX',
      application: 'row crop',
      horsepower: 410,
      description: 'row crop tractor',
      img: 'https://i.imgur.com/b46ArPRm.jpg'
    },
    {
      division: 'construction',
      modelName: '1050K',
      application: 'leveling',
      horsepower: 500,
      description: 'bull dozer',
      img: ''
    },
    {
      division: 'agriculture',
      modelName: '9RX',
      application: '4wd/ Track Tractors',
      horsepower: 620,
      description: '4WD row crop tractor, heavy applications',
      img: 'https://i.imgur.com/3TfJqZqm.jpg'
    },
    {
      division: 'agriculture',
      modelName: '2038R',
      application: 'Compact Utility',
      horsepower: 38,
      description: 'Turf and Utility applications, property management',
      img: 'https://i.imgur.com/kTbpfjAm.jpg'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
