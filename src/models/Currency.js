const { Model, DataTypes } = require('sequelize');

class Currency extends Model {
  static init(connection) {
    super.init(
      {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL(10, 2),
      },
      { sequelize: connection }
    );
  }
}

module.exports = Currency;
