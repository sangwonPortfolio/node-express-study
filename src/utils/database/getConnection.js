const dbConfig = require("../../config/dbConfig");
const mysql = require("mysql");

const pool = mysql.createPool(dbConfig());

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
