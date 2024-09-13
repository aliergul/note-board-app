const { authenticateToken } = require("../../utilities");
const Tag = require("../../models/tag.model");
const Note = require("../../models/note.model");

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

      await Note.updateMany({ tags: tagId }, { $pull: { tags: tagId } });

      return res.json({
        error: false,
        message: "Note deleted successfully and removed inside the notes.",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server Error",
      });
    }
  },
];
