const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");
const {
  checkSongExistence,
  validateSongRequestData,
} = require("../middlewares/songsValidator");

router.get("/", songController.index);
router.get("/:id", checkSongExistence, songController.show);
router.post("/", validateSongRequestData, songController.store);
router.put(
  "/:id",
  validateSongRequestData,
  checkSongsExistence,
  songController.update
);
router.delete("/:id", checkSongExistence, songController.destroy);

module.exports = router;
