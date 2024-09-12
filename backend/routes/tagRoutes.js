const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagsController");

router.post("/add-tag", tagController.addTag);

module.exports = router;
