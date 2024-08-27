const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/index");

router.post("/create-account", authController.createAccount);
router.post("/login", authController.login);

module.exports = router;
