const express = require("express");
const app = express();
const port = 3000;
const songsRouter = require("./routers/songs.js");

app.use("/songs", songsRouter);

app.listen(port, () => {
  console.log("il server è in ascolto su " + port);
});
