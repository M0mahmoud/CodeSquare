import { Comment, Post } from "./types.js";

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
