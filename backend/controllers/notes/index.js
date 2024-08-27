const addNote = require("./addNote").addNote;
const editNote = require("./editNote").editNote;
const getNotes = require("./getNotes").getNotes;
const deleteNote = require("./deleteNote").deleteNote;
const updateNotePin = require("./updateNotePin").updateNotePin;

module.exports = {
  addNote,
  editNote,
  getNotes,
  deleteNote,
  updateNotePin,
};
