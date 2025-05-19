const songs = require("../data/songs");

const checkSongsExistence = (req, res, next) => {
  const songId = parseInt(req.params.id);
  const song = songs.find((s) => s.id === songId);
  if (!song) {
    return res.status(404).json({
      message: "Song not found",
    });
  }

  req.song = song;
  next();
};

const validateSongRequestData = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  if (!title && !description) {
    return res.status(400).json({
      message: "Invalid song data",
    });
  }

  req.songNewData = { title, description };
  next();
};

module.exports = {
  validateSongRequestData,
  checkSongsExistence,
};
