'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Equipment', [{
      division: 'agriculture',
      modelName: '8RX',
      application: 'row crop',
      horsepower: 410,
      description: 'row crop tractor',
      img: ''
    },
    {
      division: 'construction',
      modelName: '1050K',
      application: 'leveling',
      horsepower: 500,
      description: 'bull dozer',
      img: ''
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
