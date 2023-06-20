/**
 * query 전송 모듈
 * @param connection
 * @param sql
 * @param params
 * @returns {Promise<unknown>}
 */
exports.queryProcess = async (connection, sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows) => {
      if (err) {
        err.name = 'DBERROR';
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
}
