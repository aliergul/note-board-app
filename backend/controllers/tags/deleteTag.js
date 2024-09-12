const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");

exports.deleteTag = [
  authenticateToken,
  async (req, res) => {
    const tagId = req.params.tagId;
    const { user } = req.user;

    try {
      const tag = await Tag.findOne({ _id: tagId, userId: user._id });

      if (!tag) {
        return res.status(404).json({
          error: true,
          message: "Tag not found",
        });
      }

      await Tag.deleteOne({ _id: tagId, userId: user._id });

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
