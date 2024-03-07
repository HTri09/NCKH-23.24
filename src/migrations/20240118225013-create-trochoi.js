'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trochoi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten: {
        type: Sequelize.STRING
      },
      luatChoi: {
        type: Sequelize.TEXT
      },
      nguonGoc: {
        type: Sequelize.STRING
      },
      hinhAnh: {
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

      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trochoi');
  }
};