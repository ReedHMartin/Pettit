// Import Sequelize package
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

let sequelize;

// Connect to JawsDB if the URL is provided in environment variables, otherwise connect to local MySQL database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// Export the Sequelize object for use in other files
module.exports = sequelize;
