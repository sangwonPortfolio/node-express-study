const express = require('express');
const router = express.Router();
const memberController = require("../controllers/memberController");
const {jwtVerifyMiddleware} = require("../middlewares/jwtVerifyMiddleware");

/* GET users listing. */
router.get('/', memberController.signInController);
router.get("/token/verify", [jwtVerifyMiddleware], memberController.tokenVerifyController);

module.exports = router;
