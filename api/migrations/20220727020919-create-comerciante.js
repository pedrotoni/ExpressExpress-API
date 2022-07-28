'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comerciante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CNPJ: {
        type: Sequelize.STRING
      },
      Razao_Social: {
        type: Sequelize.STRING
      },
      E_Commerce: {
        type: Sequelize.STRING
      },
      Contato: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comerciante');
  }
};