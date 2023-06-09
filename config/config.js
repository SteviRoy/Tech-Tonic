// Import the necessary modules
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },

  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },

  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
    operatorsAliases: false,
  },
}