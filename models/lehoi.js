'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeHoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeHoi.init({
    tenLeHoi: {
      type: DataTypes.STRING
    },
    nguonGoc: {
      type: DataTypes.STRING
    },
    thoiGianBatdau: {
      type: DataTypes.STRING
    },
    thoiGianKetThuc: {
      type: DataTypes.STRING
    },
    quyMo: {
      type: DataTypes.STRING
    },
    hoatDong: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'LeHoi',
    tableName: 'lehoi'
  });
  return LeHoi;
};