import { RequestHandler } from "express";

const requestLoggerMiddleware: RequestHandler = (req, _res, next) => {
  console.log("New Request", req.path);
  next();
};

export default requestLoggerMiddleware;
