const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagsController");

router.post("/add-tag", tagController.addTag);
router.get("/get-tags", tagController.getTags);

module.exports = router;
