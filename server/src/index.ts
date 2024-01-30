import { config } from "dotenv";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
import expressAsyncHandler from "express-async-handler";
import { createPost, listPosts } from "./controllers/postController.js";

config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const requestLoggerMiddleware: RequestHandler = (req, _res, next) => {
  console.log("New Request", req.path);
  next();
};

app.get("/v1/posts", expressAsyncHandler(listPosts));

app.post("/v1/posts", expressAsyncHandler(createPost));

app.use(requestLoggerMiddleware);
app.use("/", (_req, res) => {
  res.json({ msg: "Server running..." });
});

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err);
  res.status(500).json({ msg: "Oops!, Unexpected error" });
};
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
