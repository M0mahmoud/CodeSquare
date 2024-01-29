import { Like } from "src/types.js";

export interface LikeDao {
  createLike(like: Like): void;
}
