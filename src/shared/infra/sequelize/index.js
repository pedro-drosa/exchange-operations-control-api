const Sequelize = require('sequelize');
const dbConfig = require('../../../config/database');

const Operation = require('../../../models/Operation');
const Currency = require('../../../models/Currency');

const connection = new Sequelize(dbConfig);
Operation.init(connection);
Currency.init(connection);

module.exports = connection;
