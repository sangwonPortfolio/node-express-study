

const testMiddleware = async (req, res, next) => {
  console.log("testMiddleware !!!");
  next()
}

module.exports = testMiddleware;
