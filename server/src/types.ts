import { RequestHandler } from "express";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  postAt: number;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  postAt: number;
}

export interface Like {
  userId: string;
  postId: string;
}

// TODO: Need More Explain for this.
export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<Res>,
  Partial<Req>,
  any
>;
