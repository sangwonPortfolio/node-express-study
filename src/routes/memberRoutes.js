const express = require('express');
const router = express.Router();
const memberController = require("../controllers/memberController");
const {jwtVerifyMiddleware} = require("../middlewares/jwtVerifyMiddleware");
const {validationMiddleware} = require("../middlewares/validationMiddleware");
const {query, body, check} = require("express-validator");

/**
 *  notEmpty :  값이 비어있는 경우 error (required)
 *  exists : key가 존재하지 않는경우 error ** empty 허용 (not required)
 */

const queryValidator = [
  query('id', 'id는 필수 파라미터 입니다.').notEmpty().isString().escape(),
  query('password').exists().isNumeric(),
  validationMiddleware
]

const bodyValidator = [
  validationMiddleware
]

const checkValidator = [
  check('id').exists(),
  validationMiddleware
]

router.get('/sign-in', checkValidator, memberController.signInController);

router.get("/token/verify", [jwtVerifyMiddleware], memberController.tokenVerifyController);

router.get(
  "/query/validation",          //  end-point
  queryValidator,                   //  유효성 검사
  [jwtVerifyMiddleware],            //  middleware
  memberController.indexController  //  controller
);

router.post("/body/validation", bodyValidator, [jwtVerifyMiddleware], memberController.indexController);

router.get("/check/validation", checkValidator, memberController.indexController);

module.exports = router;
