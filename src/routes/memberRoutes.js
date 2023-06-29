const express = require('express');
const router = express.Router();
const memberController = require("../controllers/memberController");
const {jwtVerifyMiddleware} = require("../middlewares/jwtVerifyMiddleware");
const {validationMiddleware} = require("../middlewares/validationMiddleware");
const {query} = require("express-validator");

const validator = [
  query('person').notEmpty().escape(),
  validationMiddleware
]

/* GET users listing. */
router.get('/sign-in', memberController.signInController);
router.get("/token/verify", [jwtVerifyMiddleware], memberController.tokenVerifyController);

module.exports = router;
