'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DuLich extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DuLich.init({
    ten: DataTypes.STRING,
    moTa: DataTypes.TEXT,
    hoatDong: DataTypes.STRING,
    hinhAnh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DuLich',
    tableName: 'dulich'
  });
  return DuLich;
};