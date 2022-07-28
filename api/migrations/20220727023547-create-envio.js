'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Envio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Meio_de_transporte: {
        type: Sequelize.STRING
      },
      Prazo: {
        type: Sequelize.INTEGER
      },
      ComercianteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comerciante',
          key: 'id'
        }
      },
      ClienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cliente',
          key: 'id'
        }
      },
      CargaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carga',
          key: 'id'
        }
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
    await queryInterface.dropTable('Envio');
  }
};