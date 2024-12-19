const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Roles', [
        { id: uuidv4(), name: 'Admin', createdAt: new Date(), updatedAt: new Date() },
        { id: uuidv4(), name: 'Dealer', createdAt: new Date(), updatedAt: new Date() },
        { id: uuidv4(), name: 'Client', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Roles', null, {});
    }
  };
  