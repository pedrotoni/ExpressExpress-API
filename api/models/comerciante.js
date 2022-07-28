'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comerciante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comerciante.hasMany(models.Envio, {
        foreignKey: 'ComercianteId'
      })
      // define association here
    }
  }
  Comerciante.init({
    CNPJ: DataTypes.STRING,
    Razao_Social: DataTypes.STRING,
    E_Commerce: DataTypes.STRING,
    E_mail: DataTypes.STRING,
    Estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comerciante',
  });
  return Comerciante;
};