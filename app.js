const Express = require("express");
const app = Express();
const port = 3000;

const songsRouter = require("./routers/songs.js");
const errorHandlerMiddleware = require("./middlewares/errorHandler.js");
const notFoundMiddleware = require("./middlewares/notFound.js");

app.use(Express.json());
app.use(Express.static("public"));

app.use("/songs", songsRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log("il server è in ascolto su " + port);
});
