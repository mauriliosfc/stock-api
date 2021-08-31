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
        unique: true,
        type: DataTypes.STRING
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'user', key: 'id' },
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('empresa');
  }
};
