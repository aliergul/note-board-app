const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.editNote = [
  authenticateToken,
  async (req, res) => {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;
    const { user } = req.user;

    if (!title && !content && !tags) {
      return res.status(400).json({
        error: true,
        message: "No changes provided",
      });
    }

    try {
      const note = await Note.findOne({ _id: noteId, userId: user._id });

      if (!note) {
        return res.status(404).json({
          error: true,
          message: "Note not found",
        });
      }

      if (title) note.title = title;
      if (content) note.content = content;
      if (tags) note.tags = tags;
      if (isPinned) note.isPinned = isPinned;

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
