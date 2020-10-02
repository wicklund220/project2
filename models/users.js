'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Equipment, {
        through: 'userEquipment',
        foreignKey: 'user_id',
        otherKey: 'equipment_id'
      })
    }
  };
  Users.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};