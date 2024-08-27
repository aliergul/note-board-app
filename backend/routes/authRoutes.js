const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/create-account", authController.createAccount);
router.post("/login", authController.login);
router.get("/get-user", authController.getUser);

module.exports = router;
