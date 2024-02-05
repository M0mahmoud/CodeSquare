import { RequestHandler } from "express";

export const requestLoggerMiddleware: RequestHandler = (req, _res, next) => {
  console.log("New Request", req.path);
  next();
};
