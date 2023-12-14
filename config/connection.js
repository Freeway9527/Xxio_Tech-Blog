const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.POSTGRES_DB) {
  sequelize = new Sequelize(
    process.env.POSTGRES_DB, 
    process.env.POSTGRES_USER, 
    process.env.POSTGRES_PASSWORD, 
    {
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: "postgres",
    port: process.env.POSTGRES_PORT || 5432,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST || 'localhost',
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
  });
}

module.exports = sequelize;
