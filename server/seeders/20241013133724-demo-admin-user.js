const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('admin@1234', 10);

    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        username: 'admin',
        password: hashedPassword,
        email: 'admin@example.com',
        role_id: '1870a2c3-7f7f-4cad-89ab-b903896a9380',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
