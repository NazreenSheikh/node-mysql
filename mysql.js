const mysql = require('mysql2/promise')
const db = mysql.createPool(
  process.env.DBURL
)

module.exports = db
