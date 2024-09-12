const addTag = require("./tags/addTag").addTag;
const getTags = require("./tags/getTags").getTags;
const deleteTag = require("./tags/deleteTag").deleteTag;
const editTag = require("./tags/editTag").editTag;
const searchTags = require("./tags/searchTags").searchTags;

module.exports = {
  addTag,
  getTags,
  deleteTag,
  editTag,
  searchTags,
};
