import { randomUUID } from "crypto";
import { db } from "../datastore/index.js";
import { ExpressHandler, Post } from "../types.js";

export const listPosts: ExpressHandler<{}, {}> = (_req, res) => {
  res.json({ posts: db.listsPosts() });
};

interface CreatePostResponse {}
type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;

export const createPost: ExpressHandler<
  CreatePostRequest,
  CreatePostResponse
> = (req, res) => {
  console.log("req:", req.body);
  if (!req.body.title || !req.body.userId || !req.body.url) {
    return res.status(400).json({ msg: "Error" });
  }
  const post = {
    id: randomUUID(),
    postAt: Date.now(),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
  };

  db.createPost(post);
  return res.status(200).json({ msg: "Post Created..." });
};
