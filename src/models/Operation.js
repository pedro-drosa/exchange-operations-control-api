const {Model, DataTypes} = require('sequelize');

class Operation extends Model{
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      source: DataTypes.STRING,
      target: DataTypes.STRING,
      exchange: DataTypes.DECIMAL(10,2),
      total: DataTypes.DECIMAL(10,2),
      iof: DataTypes.DECIMAL(10,2),
      standardRat: DataTypes.DECIMAL(10,2),
    },{ sequelize: connection})
  }
}

module.exports = Operation;