import { Like } from "../../types.js";

export interface LikeDao {
  createLike(like: Like): Promise<void>;
}
