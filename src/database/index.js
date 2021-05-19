const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Operation = require('../model/Operation');
const Currency = require('../model/Currency');

const connection = new Sequelize(dbConfig);
Operation.init(connection);
Currency.init(connection);

module.exports = connection;