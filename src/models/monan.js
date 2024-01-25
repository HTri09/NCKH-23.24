'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonAn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MonAn.init({
    ten: {
      type: DataTypes.STRING(100)
    },
    nguyenLieu: {
      type: DataTypes.TEXT
    },
    cachCheBien: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    tableName: 'monan',
    modelName: 'MonAn',
  });
  return MonAn;
};