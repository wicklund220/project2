'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attachment.belongsTo(models.Equipment, {foreignKey: 'equipment_attachment_id'})
    }
  };
  Attachment.init({
    division: DataTypes.STRING,
    modelName: DataTypes.STRING,
    application: DataTypes.STRING,
    description: DataTypes.STRING,
    equipment_attachment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};