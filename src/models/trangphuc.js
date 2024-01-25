'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrangPhuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrangPhuc.init({
    ten: {
      type: DataTypes.STRING
    },
    moTa: {
      type: DataTypes.TEXT
    },
    nguonGoc: {
      type: DataTypes.TEXT
    },
    chatLieu: {
      type: DataTypes.STRING
    },
    hoaTiet: {
      type: DataTypes.STRING
    },
    hinhAnh: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'TrangPhuc',
    tableName: 'trangphuc'
  });
  return TrangPhuc;
};