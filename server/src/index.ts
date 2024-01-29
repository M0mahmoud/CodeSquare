import { config } from "dotenv";
import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
import { db } from "./datastore/index.js";

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

app.get("/posts", (request, response) => {
  response.json({ posts: db.listsPosts() });
});

app.post("/posts", (req, res) => {
  const post = req.body;
  db.createPost(post);
  res.json({ msg: "Done" }).status(200);
});

app.use(requestLoggerMiddleware);
app.use("/", (_req, res) => {
  res.json({ msg: "Server running..." });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
