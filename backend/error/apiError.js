"use strict";

class APIError extends Error {
  constructor({ code, message, httpStatus, context, data, innerError }) {
    super(message);
    this.httpStatus = httpStatus;
    this.body = { errors: { code, message }, data };
    this.context = context;
    this.retriable = false;
    this.innerError = innerError;
  }
}

module.exports = APIError;
