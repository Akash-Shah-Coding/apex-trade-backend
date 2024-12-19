'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tokens', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      serviceName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      jwtToken: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      refreshToken: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      feedToken: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tokens');
  }
};
