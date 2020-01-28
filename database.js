const mysql = require('mysql2');

const HOST = 'localhost';
const PASSWORD = '';
const DATABASE = 'my_test_db'
const USER = 'root';

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD
}).promise();

module.exports = connection;