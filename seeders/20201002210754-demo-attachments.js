'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Attachments', [{
      division: 'agriculture',
      modelName: '440R',
      application: 'Tractor',
      description: 'utility loading purposes',
      img: 'https://www.deere.com/assets/images/region-4/products/loaders/front-end-loaders/440r/440r_r4g032999_72dpi_rrd_1366x768_large_009dba650fc4cb4ee16f52353f498dfedc63ec5e.jpg'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Attachments', null, {});
  }
};
