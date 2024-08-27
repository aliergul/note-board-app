const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notes/index");

router.post("/add-note", noteController.addNote);
router.put("/edit-note/:noteId", noteController.editNote);
router.get("/get-notes", noteController.getNotes);
router.delete("/delete-note/:noteId", noteController.deleteNote);
router.put("/update-note-pin/:noteId", noteController.updateNotePin);

module.exports = router;
