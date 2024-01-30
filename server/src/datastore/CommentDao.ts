import { Comment } from "../types.js";

export interface CommentDao {
  createComment(comment: Comment): void;
  listComments(postId: string): Comment[];
  deleteComment(id: string): void;
}