const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/burgers_db')

module.exports = connection