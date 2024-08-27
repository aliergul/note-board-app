const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.deleteNote = [
  authenticateToken,
  async (req, res) => {
    const noteId = req.params.noteId;
    const { user } = req.user;

    try {
      const note = await Note.findOne({ _id: noteId, userId: user._id });

      if (!note) {
        return res.status(404).json({
          error: true,
          message: "Note not found",
        });
      }

      await Note.deleteOne({ _id: noteId, userId: user._id });

      return res.json({
        error: false,
        message: "Note deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
