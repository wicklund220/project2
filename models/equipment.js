'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Equipment.hasMany(models.attachment, {foreignKey: 'equipment_attachment_id'});
      Equipment.belongsToMany(models.Users, {
        through: 'userEquipment',
        foreignKey: 'equipment_id',
        otherKey: 'user_id'
      })
    }
  };
  Equipment.init({
    division: DataTypes.STRING,
    modelName: DataTypes.STRING,
    application: DataTypes.STRING,
    horsepower: DataTypes.INTEGER,
    description: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipment',
  });
  return Equipment;
};