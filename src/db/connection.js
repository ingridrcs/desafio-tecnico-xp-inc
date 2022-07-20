const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.envMYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
// console.log(connection);
module.exports = connection;