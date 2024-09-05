const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notesController");

router.post("/add-note", noteController.addNote);
router.put("/edit-note/:noteId", noteController.editNote);
router.get("/get-notes", noteController.getNotes);
router.delete("/delete-note/:noteId", noteController.deleteNote);
router.put("/update-note-pin/:noteId", noteController.updateNotePin);
router.get("/search-notes/", noteController.searchNotes);

module.exports = router;
