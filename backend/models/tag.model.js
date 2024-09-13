const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  userId: { type: String, required: true },
  inserttime: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Tag", tagSchema);
