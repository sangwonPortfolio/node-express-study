const dbConfig = () => {
  return {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tkddnjs@123',
    database: 'town',
    connectionLimit: 10,
    timezone: 'Asia/Seoul',
    charset: 'utf8mb4',
    multipleStatements: true
  }
}

module.exports = dbConfig;
