import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { SignInHandler, SignUpHandler } from "./controllers/authController.js";
import { createPost, listPosts } from "./controllers/postController.js";
import { initDB } from "./datastore/index.js";
import { errorHandler } from "./middleware/erro.js";
import { requestLoggerMiddleware } from "./middleware/logger.js";

(async () => {
  await initDB();
  config();
  const app = express();
  app.use(express.json());
  const port = process.env.PORT || 8000;

  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  });

  //Middleware
  app.use(requestLoggerMiddleware);

  // Routes
  app.get("/v1/posts", expressAsyncHandler(listPosts));
  app.post("/v1/posts", expressAsyncHandler(createPost));
  app.post("/v1/signup", expressAsyncHandler(SignUpHandler));
  app.post("/v1/signin", expressAsyncHandler(SignInHandler));

  // Error
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
})();
