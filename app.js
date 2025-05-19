const express = require("express");
const app = express();
const port = 3000;
const songsRouter = require('./routers/songs.js');

app.use(songsRouter);


app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

app.listen(port, () => {
  console.log("il server è in ascolto su " + port);
});
