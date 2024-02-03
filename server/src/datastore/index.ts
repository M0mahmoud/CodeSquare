import { CommentDao } from "./dao/CommentDao.js";
import { LikeDao } from "./dao/LikeDao.js";
import { PostDao } from "./dao/PostDao.js";
import { UserDao } from "./dao/UserDao.js";
// import { InMemoryDataStore } from "./database/index.js";
import { SqlDataStore } from "./sql/index.js";

export interface DataStore extends UserDao, LikeDao, CommentDao, PostDao {}

export let db: DataStore;
export async function initDB() {
  // db = new InMemoryDataStore();
  db = await new SqlDataStore().openDb();
}
