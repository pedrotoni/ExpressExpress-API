'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carga.hasMany(models.Envio, {
        foreignKey: 'CargaId'
      })
      // define association here
    }
  }
  Carga.init({
    Peso_KG: DataTypes.STRING,
    Numero_de_volume: DataTypes.STRING,
    Fragil: DataTypes.BOOLEAN,
    Seguro: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Carga',
  });
  return Carga;
};