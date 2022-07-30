'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { basename } from 'path';
const env = process.env.NODE_ENV || 'development';
import dbConfig from "../config/config.json" assert {type:'json'};
const db = {};
const config = dbConfig[env];
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

console.log(__dirname)

import CargaModel from './carga.js';
import ClienteModel from './cliente.js';
import ComercianteModel from './comerciante.js';
import EnvioModel from './envio.js';

db['Carga'] = CargaModel(sequelize, Sequelize.DataTypes);
db['Cliente'] = ClienteModel(sequelize, Sequelize.DataTypes);
db['Comerciante'] = ComercianteModel(sequelize, Sequelize.DataTypes);
db['Envio'] = EnvioModel(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
