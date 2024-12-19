const { Pool } = require('pg');
require('dotenv').config();  


// Create a new PostgreSQL pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Listen for a successful connection
pool.on('connect', () => {
  console.log('Connected to the database');
});

// Handle errors (optional but good practice)
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Export the query function to use in other modules
module.exports = {
  query: (text, params) => pool.query(text, params),
};
