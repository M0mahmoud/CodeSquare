import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err);
  res.status(500).json({ msg: "Oops!, Unexpected error" });
};
export default errorHandler;
