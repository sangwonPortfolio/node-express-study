

const testMiddleware2 = async (req, res, next) => {
  console.log("testMiddleware2 !!!");
  next()
}

module.exports = testMiddleware2;
