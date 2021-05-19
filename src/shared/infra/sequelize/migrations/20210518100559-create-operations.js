'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('operations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      target: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      exchange: {
        type: Sequelize.DECIMAL(10, 2),
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
      },
      iof: {
        type: Sequelize.DECIMAL(10, 2),
      },
      standardRat: {
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('operations');
  },
};
