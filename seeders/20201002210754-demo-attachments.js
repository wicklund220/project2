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
      modelName: 'N530F',
      application: 'Air Drill',
      description: 'Used for seeding small grain crops',
      img: 'https://i.imgur.com/5leC5tlm.jpg'
    },
    {
      division: 'agriculture',
      modelName: 'N530F',
      application: 'Air Drill',
      description: 'Used for seeding small grain crops',
      img: 'https://i.imgur.com/5leC5tlm.jpg'
    },
    {
      division: 'agriculture',
      modelName: 'Mobile RTK',
      application: 'Satellite positioning',
      description: 'Enables use of Autosteer for gps guided machinery',
      img: 'https://i.imgur.com/njUI9Zf.jpg'
    },
    {
      division: 'agriculture',
      modelName: '1785',
      application: 'Planter',
      description: 'Row crop planter',
      img: 'https://i.imgur.com/Gvl1FtP.jpg'
    },
    {
      division: 'agriculture',
      modelName: '1785',
      application: 'Planter',
      description: 'Row crop planter',
      img: 'https://i.imgur.com/Gvl1FtP.jpg'
    },
    {
      division: 'Construction',
      modelName: 'TR60B',
      application: 'Trencher',
      description: 'Used for quickly making trenches on the job site',
      img: 'https://i.imgur.com/ya8apfg.jpg'
    },
    {
      division: 'Construction',
      modelName: 'HH80C',
      application: 'Jack hammer',
      description: 'Used for breaking up concrete or other hard objects',
      img: 'https://i.imgur.com/MV11mDu.jpg'
    },
    {
      division: 'Construction',
      modelName: 'CP30E',
      application: 'Cold Planer',
      description: 'Asphault grinding and chipping',
      img: 'https://i.imgur.com/9EjqjRi.jpg'
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Attachments', null, {});
  }
};
