const { authenticateToken } = require("../../utilities");
const Note = require("../../models/note.model");

exports.searchNotes = [
  authenticateToken,
  async (req, res) => {
    const { user } = req.user;
    const { query, tag } = req.query;

    if (!query && !tag) {
      return res
        .status(400)
        .json({ error: true, message: "Search query or tag is required." });
    }

    try {
      const filterConditions = { userId: user._id };

      if (query) {
        filterConditions.$or = [
          { title: { $regex: new RegExp(query, "i") } },
          { content: { $regex: new RegExp(query, "i") } },
        ];
      }

      if (tag) {
        filterConditions.tags = tag;
      }

      const matchingNotes = await Note.find(filterConditions);

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
