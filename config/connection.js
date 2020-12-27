const mysql = require('mysql2')
require ("dotenv").config()
const connection = mysql.createConnection(process.env.JAWSDB_URL || `mysql://root:${process.env.PASSWORD}@localhost/burgers_db`)

module.exports = connection