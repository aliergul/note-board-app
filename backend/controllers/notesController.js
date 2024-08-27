const addNote = require("./notes/addNote").addNote;
const editNote = require("./notes/editNote").editNote;
const getNotes = require("./notes/getNotes").getNotes;
const deleteNote = require("./notes/deleteNote").deleteNote;
const updateNotePin = require("./notes/updateNotePin").updateNotePin;

module.exports = {
  addNote,
  editNote,
  getNotes,
  deleteNote,
  updateNotePin,
};
