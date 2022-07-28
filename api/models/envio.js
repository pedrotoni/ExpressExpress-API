'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Envio.init({
    Meio_de_transporte: DataTypes.STRING,
    Prazo: DataTypes.INTEGER,
    ComercianteId: DataTypes.INTEGER,
    ClienteId: DataTypes.INTEGER,
    CargaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Envio',
  });
  return Envio;
};