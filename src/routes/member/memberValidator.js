const {query, body, check} = require("express-validator");
const validatorErrorMiddleware = require("../../middlewares/validatorErrorMiddleware");

exports.queryValidator = [
  query('id', 'id는 필수 파라미터 입니다.').notEmpty().isString().escape(),
  query('password').exists().isNumeric(),
  validatorErrorMiddleware
]

exports.bodyValidator = [
  validatorErrorMiddleware
]

exports.checkValidator = [
  query('id').exists(),
  validatorErrorMiddleware
]
