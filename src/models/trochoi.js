'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TroChoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TroChoi.init({
    ten: {
      type: DataTypes.STRING
    },
    luatChoi: {
      type: DataTypes.TEXT
    },
    nguonGoc: {
      type: DataTypes.STRING
    },
    hinhAnh: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'TroChoi',
    tableName: 'trochoi'
  });
  return TroChoi;
};