import { config } from "dotenv";
import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
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

app.get("/posts", listPosts);

app.post("/posts", createPost);

app.use(requestLoggerMiddleware);
app.use("/", (_req, res) => {
  res.json({ msg: "Server running..." });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
