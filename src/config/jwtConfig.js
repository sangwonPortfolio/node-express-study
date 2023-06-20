const jwtConfig = () => {
  return {
    SECRETKEY: process.env.JWT_SECRET_KEY,
  }
}

module.exports = jwtConfig;
