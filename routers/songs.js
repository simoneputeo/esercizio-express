const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");
const {
  checkSongsExistence,
  validateSongRequestData,
} = require("../middlewares/songsValidator");

router.get("/", songController.index);
router.get("/:id", checkSongsExistence, songController.show);
router.post("/", validateSongRequestData, songController.store);

router.put(
  "/:id",
  validateSongRequestData,
  checkSongsExistence,
  songController.update
);

router.delete("/:id", checkSongsExistence, songController.destroy);

module.exports = router;
