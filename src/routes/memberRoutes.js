const express = require('express');
const router = express.Router();
const memberController = require("../controllers/memberController");

/* GET users listing. */
router.get('/', memberController.signInController);

module.exports = router;
