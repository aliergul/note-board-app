const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.getNotes = [
  authenticateToken,
  async (req, res) => {
    const { user } = req.user;

    try {
      const notes = await Note.find({ userId: user._id }).sort({
        isPinned: -1,
      });

      return res.json({
        error: false,
        notes,
        message: "All notes retrieved successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
