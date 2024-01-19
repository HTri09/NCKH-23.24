'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lehoi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten: {
        type: Sequelize.STRING
      },
      nguonGoc: {
        type: Sequelize.STRING
      },
      thoiGianBatDau: {
        type: Sequelize.STRING
      },
      thoiGianKetThuc: {
        type: Sequelize.STRING
      },
      quyMo: {
        type: Sequelize.STRING
      },
      hoatDong: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lehoi');
  }
};