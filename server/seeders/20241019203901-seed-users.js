'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      // Admin
      { 
        id: 'uuid-for-admin-user', 
        username: 'admin1', 
        password: 'adminpass', 
        email: 'admin1@example.com', 
        role_id: 'uuid-for-admin', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      // Dealer
      { 
        id: 'uuid-for-dealer-user', 
        username: 'dealer1', 
        password: 'dealerpass', 
        email: 'dealer1@example.com', 
        role_id: 'uuid-for-dealer', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      // Clients
      { 
        id: 'uuid-for-client1', 
        username: 'client1', 
        password: 'clientpass1', 
        email: 'client1@example.com', 
        role_id: 'uuid-for-client', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 'uuid-for-client2', 
        username: 'client2', 
        password: 'clientpass2', 
        email: 'client2@example.com', 
        role_id: 'uuid-for-client', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
