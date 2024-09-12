const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");

exports.addTag = [
  authenticateToken,
  async (req, res) => {
    const { title, color } = req.body;
    const { user } = req.user;

    if (!title) {
      return res.status(400).json({
        error: true,
        message: "Title is required",
      });
    }

    if (!color) {
      return res.status(400).json({
        error: true,
        message: "Color is required",
      });
    }

    try {
      const tag = new Tag({
        title,
        color,
        userId: user._id,
      });
      await tag.save();

      return res.json({
        error: false,
        tag,
        message: "Tag added successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
