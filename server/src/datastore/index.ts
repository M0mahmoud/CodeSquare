import { CommentDao } from "./CommentDao.js";
import { LikeDao } from "./LikeDao.js";
import { PostDao } from "./PostDao.js";
import { UserDao } from "./UserDao.js";
import { InMemoryDataStore } from "./database/index.js";

export interface DataStore extends UserDao, LikeDao, CommentDao, PostDao {}
export const db = new InMemoryDataStore();
