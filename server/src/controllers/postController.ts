import { randomUUID } from "crypto";
import {
  CreatePostReq,
  CreatePostRes,
  ListPostRes,
  ListPostsReq,
} from "../api.js";
import { db } from "../datastore/index.js";
import { ExpressHandler } from "../types.js";

export const listPosts: ExpressHandler<ListPostsReq, ListPostRes> = async (
  _req,
  res
) => {
  res.json({ posts: await db.listsPosts() });
};

export const createPost: ExpressHandler<CreatePostReq, CreatePostRes> = async (
  req,
  res
) => {
  if (!req.body.title || !req.body.userId || !req.body.url) {
    return res.status(400).json({ msg: "Something missing..." });
  }
  // TODO: Validating the data.
  const post = {
    id: randomUUID(),
    postAt: Date.now(),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
  };

  await db.createPost(post);
  return res.status(200).json({ msg: "Post Created..." });
};
