const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");

exports.searchTags = [
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
      const matchingTags = await Tag.find({
        userId: user._id,
        $or: [{ title: { $regex: new RegExp(query, "i") } }],
      });

      return res.json({
        error: false,
        notes: matchingTags,
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
