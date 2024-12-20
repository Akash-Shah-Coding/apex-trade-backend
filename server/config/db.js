// const { Pool } = require('pg');
// require('dotenv').config();  

// // inside db 
// console.log("DB CREd ==> ",{
//   DB_HOST: process.env.DB_HOST,
//   DB_USER: process.env.DB_USER,
//   DB_NAME: process.env.DB_NAME,
//   DB_PASSWORD: process.env.DB_PASSWORD,
//   DB_PORT: process.env.DB_PORT,
// });


// // Create a new PostgreSQL pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: false, // Required for Supabase
//   },
// });

// // Listen for a successful connection
// pool.on('connect', () => {
//   console.log('Connected to the database');
// });

// // Handle errors (optional but good practice)
// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// // Export the query function to use in other modules
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };


const { Pool } = require('pg');
require('dotenv').config();  

// Create a new PostgreSQL pool
const pool = new Pool({
  connectionString: 'postgresql://postgres.zynsnhjobzvbaayxugit:!QgHDNxQVvCfxH9@aws-0-ap-south-1.pooler.supabase.com:5432/postgres', // Single connection string for simplicity
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
});

// Listen for a successful connection
pool.on('connect', () => {
  console.log('Connected to the database');
});

// Handle errors
pool.on('error', (err) => {
  console.error('Database error', err);
  process.exit(-1);
});

// Export the query function
module.exports = {
  query: (text, params) => pool.query(text, params),
};
