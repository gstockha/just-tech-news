const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
let sequelize;

if (process.env.JAWSDB_URL) { //resources tab in heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    logging: false
  });
}

module.exports = sequelize;