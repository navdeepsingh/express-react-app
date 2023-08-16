// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    code: "INTERNAL_SERVER_ERROR",
    message: err.message,
  });
};

const pathNotFound = (req, res) => {
  // const error = new Error(`Path not found: ${req.originalUrl}`);
  res.status(404).send({
    code: "INVALID_ENDPOINT",
    message: `${req.method} ${req.originalUrl} not found`,
  });
  //  next(err);
};

// process.on("uncaughtException", () => {

// })
// process.on("unhandledRejection", () => {

// })

module.exports = { errorHandler, pathNotFound };
