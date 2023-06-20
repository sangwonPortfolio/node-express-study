const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_CONNECTIONLIMIT,
  timezone: process.env.DB_TIMEZONE,
  charset: process.env.DB_CHARSET,
  multipleStatements: process.env.DB_MULTIPLESTATEMENTS
});

const getConnection = async () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      } else {
        resolve(conn);
      }
    })
  })
}

module.exports = getConnection;
