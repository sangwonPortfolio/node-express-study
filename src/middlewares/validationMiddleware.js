const {validationResult} = require("express-validator");
const response = require("../utils/response/index");

exports.validationMiddleware = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return response(res, 400, "4000", "", error);
  } else {
    next();
  }
}
