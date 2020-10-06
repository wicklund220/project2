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
    },
    {
      division: 'agriculture',
      modelName: '6250R',
      application: 'Utility',
      horsepower: 250,
      description: 'Livestock farming, loader work, mid size specialty applications',
      img: 'https://i.imgur.com/uHV4o5om.jpg'
    },
    {
      division: 'agriculture',
      modelName: '5115ML',
      application: 'Specialty',
      horsepower: 115,
      description: 'orchard applications',
      img: 'https://i.imgur.com/cthEo06m.jpg'
    },
    {
      division: 'Construction',
      modelName: '870G',
      application: 'Excavation',
      horsepower: 512,
      description: 'Used for digging pits, foundations, or other construction work',
      img: 'https://i.imgur.com/hxZTTgBm.jpg'
    },
    {
      division: 'Construction',
      modelName: '872G',
      application: 'Earth Grading',
      horsepower: 300,
      description: 'Leveling roadways, large areas of land, cutting ditches',
      img: 'https://i.imgur.com/hFl8ISbm.jpg'
    },
    {
      division: 'Construction',
      modelName: '460E',
      application: 'Material Transport',
      horsepower: 481,
      description: 'Used to transport large quantites of material at mine and other excavating sites',
      img: 'https://i.imgur.com/KcwUGv8m.jpg'
    },
    {
      division: 'Agriculture',
      modelName: 'X9 1100',
      application: 'Grain Harvesting',
      horsepower: 690,
      description: 'Used to harvest grain',
      img: 'https://i.imgur.com/6j7xpkQm.jpg'
    },
    {
      division: 'Construction',
      modelName: '332G',
      application: 'Skid Steer',
      horsepower: 100,
      description: 'General purpose machine used for scooping, digging, and many other tasks',
      img: 'https://i.imgur.com/8YRNTS4.jpg'
    }
  ], {});
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
