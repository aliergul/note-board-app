const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notes/index");

router.post("/add-note", noteController.addNote);

module.exports = router;
