const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");

exports.editTag = [
  authenticateToken,
  async (req, res) => {
    const tagId = req.params.tagId;
    const { title, color } = req.body;
    const { user } = req.user;

    if (!title && !color) {
      return res.status(400).json({
        error: true,
        message: "No changes provided",
      });
    }

    try {
      const tag = await Tag.findOne({ _id: tagId, userId: user._id });

      if (!tag) {
        return res.status(404).json({
          error: true,
          message: "Tag not found",
        });
      }

      if (title) tag.title = title;
      if (color) tag.color = color;

      await tag.save();

      return res.json({
        error: false,
        tag,
        message: "Tag updated successfully",
      });
    } catch (error) {
      return res.json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
