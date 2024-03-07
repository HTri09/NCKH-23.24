'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trangphuc', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten: {
        type: Sequelize.STRING
      },
      moTa: {
        type: Sequelize.TEXT
      },
      nguonGoc: {
        type: Sequelize.TEXT
      },
      chatLieu: {
        type: Sequelize.TEXT
      },
      hoaTiet: {
        type: Sequelize.TEXT
      },
      hinhAnh: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trangphuc');
  }
};