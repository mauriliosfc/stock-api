'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('empresa', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cnpj: {
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: true,
        type: DataTypes.STRING
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('empresa');
  }
};
