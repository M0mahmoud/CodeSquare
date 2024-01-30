import { Post } from "../../types.js";

export interface PostDao {
  listsPosts(): Promise<Post[]>;
  createPost(post: Post): Promise<void>;
  getPost(id: string): Promise<Post | undefined>;
  deletePost(id: string): Promise<void>;
}
