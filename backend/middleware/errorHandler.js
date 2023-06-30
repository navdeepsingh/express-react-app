// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

// process.on("uncaughtException", () => {

// })
// process.on("unhandledRejection", () => {

// })

module.exports = errorHandler;
