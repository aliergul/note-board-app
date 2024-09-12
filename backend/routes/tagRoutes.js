const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagsController");

router.post("/add-tag", tagController.addTag);
router.get("/get-tags", tagController.getTags);
router.delete("/delete-tag/:tagId", tagController.deleteTag);
router.put("/edit-tag/:tagId", tagController.editTag);
router.get("/search-tags", tagController.searchTags);

module.exports = router;
