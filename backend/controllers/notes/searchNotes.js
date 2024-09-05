const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.searchNotes = [
  authenticateToken,
  async (req, res) => {
    const { user } = req.user;
    const { query } = req.query;

    if (!query) {
      return res
        .status(400)
        .json({ error: true, message: "Search query is required." });
    }

    try {
      const matchingNotes = await Note.find({
        userId: user._id,
        $or: [
          { title: { $regex: new RegExp(query, "i") } },
          { content: { $regex: new RegExp(query, "i") } },
        ],
      });

      return res.json({
        error: false,
        notes: matchingNotes,
        message: "Search query retrieved successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
