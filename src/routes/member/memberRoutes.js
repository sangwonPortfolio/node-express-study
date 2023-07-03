const express = require('express');
const router = express.Router();
const memberController = require("../../controllers/memberController");
const jwtVerifyMiddleware = require("../../middlewares/jwtVerifyMiddleware");
const memberValidator = require("./memberValidator");
const testMiddleware = require("../../middlewares/testMiddleware");
const testMiddleware2 = require("../../middlewares/testMiddleware2");

/**
 *  notEmpty :  값이 비어있는 경우 error (required)
 *  exists : key가 존재하지 않는경우 error ** empty 허용 (not required)
 */

router.get(
  '/sign-in',
  memberValidator.checkValidator,
  [testMiddleware, testMiddleware2],
  memberController.signInController
);

router.get("/token/verify", [jwtVerifyMiddleware], memberController.tokenVerifyController);

router.get(
  "/query/validation",          //  end-point
  memberValidator.queryValidator,   //  유효성 검사
  [jwtVerifyMiddleware],            //  middleware
  memberController.indexController  //  controller
);

router.post(
  "/body/validation",
  memberValidator.bodyValidator,
  [jwtVerifyMiddleware],
  memberController.indexController
);

router.get(
  "/check/validation",
  memberValidator.checkValidator,
  memberController.indexController
);

module.exports = router;
