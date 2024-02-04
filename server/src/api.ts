import { Comment, Post, User } from "./types.js";

// Post APIs
export interface ListPostsReq {}
export interface ListPostRes {
  posts: Post[];
}
export interface CreatePostRes {}
export type CreatePostReq = Pick<Post, "title" | "url" | "userId">;

export interface GetPostReq {}
export interface GetPostRes {
  post: Post;
}

// Comment APIs
export type CreateCommentReq = Pick<Comment, "comment">;
export interface CreateCommentRes {}

// Users APIs
export type SignUpReq = Pick<
  User,
  "email" | "firstName" | "lastName" | "password" | "username"
>;
export interface SignUpRes {}

export interface SignInReq {
  login: string; // Email Or Password
  password: string;
}
export type SignInRes = Pick<
  User,
  "email" | "firstName" | "lastName" | "id" | "username"
>;
