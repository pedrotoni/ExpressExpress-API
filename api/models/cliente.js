'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Envio, {
        foreignKey: 'ClienteId'
      })
      // define association here
    }
  }
  Cliente.init({
    Nome: DataTypes.STRING,
    CPF: DataTypes.STRING,
    E_mail: DataTypes.STRING,
    Estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};