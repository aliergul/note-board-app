const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");

exports.getTags = [
  authenticateToken,
  async (req, res) => {
    const { user } = req.user;

    try {
      const tags = await Tag.find({ userId: user._id });

      return res.json({
        error: false,
        tags,
        message: "All tags retrieved successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
