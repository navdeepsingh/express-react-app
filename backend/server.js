const express = require("express");
//const asyncHandler = require("express-async-handler");
const morgan = require("morgan");
const cache = require("express-cache-ctrl");
const cors = require("cors");
const { errorHandler, pathNotFound } = require("./middleware/errorHandler.js");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cache.private(3600)); // 1 min.

app.get("/", async (req, res, next) => {
  try {
    //console.log(promise);
    res.send({ message: "Hello World!" });
  } catch (e) {
    next(e);
  }
});

app.post("/create", async (req, res, next) => {
  try {
    //console.log(promise);
    res.send({ message: "Hello World from POST!" });
  } catch (e) {
    next(e);
  }
});

app.use(pathNotFound);
app.use(errorHandler);

app.listen(5001, () => {
  console.log("listening now at 5001...");
});
