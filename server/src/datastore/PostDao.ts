import { Post } from "src/types.js";

export interface PostDao {
  listsPosts(): Post[];
  createPost(post: Post): void;
  getPost(id: string): Post | undefined;
  deletePost(id: string): void;
}
