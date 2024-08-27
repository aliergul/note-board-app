const User = require("../../models/user.model");
const { authenticateToken } = require("../../utilities");

exports.getUser = [
  authenticateToken,
  async (req, res) => {
    const { user } = req.user;

    const isUser = await User.findOne({ _id: user._id });

    if (!isUser) {
      return res.sendStatus(401);
    }

    return res.json({
      user: {
        fullName: isUser.fullName,
        email: isUser.email,
        _id: isUser._id,
        inserttime: isUser.inserttime,
      },
      message: "",
    });

    // return res.json({
    //     user: isUser,
    //     message: "",
    //   });
  },
];
