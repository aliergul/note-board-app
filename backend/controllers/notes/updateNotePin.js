const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.updateNotePin = [
  authenticateToken,
  async (req, res) => {
    const noteId = req.params.noteId;
    const { isPinned } = req.body;
    const { user } = req.user;

    try {
      const note = await Note.findOne({ _id: noteId, userId: user._id });

      if (!note) {
        return res.status(404).json({
          error: true,
          message: "Note not found",
        });
      }

      note.isPinned = isPinned;

      await note.save();
      return res.json({
        error: false,
        note,
        message: "Note updated successfully",
      });
    } catch (error) {
      return res.json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
