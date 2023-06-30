const express = require("express");
//const asyncHandler = require("express-async-handler");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    await Promise.resolve("Promise test");
    //console.log(promise);
    res.send("Working...");
  } catch (e) {
    next(new Error("Oops!!"));
  }
});

app.use(errorHandler);

app.listen(5001, () => {
  console.log("listening now at 5001...");
});
