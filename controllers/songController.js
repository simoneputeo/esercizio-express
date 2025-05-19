const songs = require("../data/songs");

const index = (req, res) => {
  res.json(songs);
};

const show = (req, res) => {
  res.json(req.song);
};

const store = (req, res) => {
  const newSong = req.songNewData;
  newSong.id = songs.length + 1;
  songs.push(newSong);
  res.json(newSong);
};

const update = (req, res) => {
  const song = req.song;
  const newSongData = req.songNewData;
  song.title = newSongData.title;
  song.description = newSongData.description;
  res.json(song);
};

const destroy = (req, res) => {
  const song = req.song;
  const songIndex = songs.indexOf(song);
  songs.splice(songIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
