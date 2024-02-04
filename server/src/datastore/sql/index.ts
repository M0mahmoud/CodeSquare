import { Database, open as sqliteOpen } from "sqlite";
import sqlite3 from "sqlite3";

import * as path from "path";
import { Comment, Like, Post, User } from "src/types.js";
import * as url from "url";
import { DataStore } from "../index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export class SqlDataStore implements DataStore {
  private db!: Database<sqlite3.Database, sqlite3.Statement>;

  public async openDb() {
    // open the database
    this.db = await sqliteOpen({
      filename: path.join(__dirname, "codersquare.sqlite"),
      driver: sqlite3.Database,
    });
    this.db.run("PRAGMA foreign_keys = ON;");
    await this.db.migrate({
      migrationsPath: path.join(__dirname, "migrations"),
    });

    return this;
  }

  async createUser(user: User): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    await this.db.run(
      "INSERT INTO users (id, firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?, ?)",
      [
        user.id,
        user.firstName,
        user.lastName,
        user.username,
        user.email,
        user.password,
      ]
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    if (!this.db) throw new Error("Database not opened");
    return await this.db.get<User>("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!this.db) throw new Error("Database not opened");
    return await this.db.get<User>("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
  }

  async createLike(like: Like): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    await this.db.run("INSERT INTO likes (userId, postId) VALUES (?, ?)", [
      like.userId,
      like.postId,
    ]);
  }

  async createComment(comment: Comment): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    await this.db.run(
      "INSERT INTO comments (id, userId, postId, comment ,postedAt) VALUES (?, ?, ?, ?)",
      [
        comment.id,
        comment.userId,
        comment.postId,
        comment.comment,
        comment.postedAt,
      ]
    );
  }

  async listComments(postId: string): Promise<Comment[]> {
    if (!this.db) throw new Error("Database not opened");
    return await this.db.all("SELECT * FROM comments WHERE postId = ?", [
      postId,
    ]);
  }

  async deleteComment(id: string): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    await this.db.run("DELETE FROM comments WHERE id = ?", [id]);
  }

  async listsPosts(): Promise<Post[]> {
    if (!this.db) throw new Error("Database not opened");
    return await this.db.all("SELECT * FROM posts");
  }

  async createPost(post: Post): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    await this.db.run(
      "INSERT INTO posts (id, title, url, userId, postedAt) VALUES (?, ?, ?, ?, ?)",
      post.id,
      post.title,
      post.url,
      post.userId,
      post.postedAt
    );
  }

  async getPost(id: string): Promise<Post | undefined> {
    if (!this.db) throw new Error("Database not opened");
    return await this.db.get("SELECT post FROM posts WHERE id = ?", [id]);
  }

  async deletePost(id: string): Promise<void> {
    if (!this.db) throw new Error("Database not opened");
    this.db.db.run("DELETE FROM posts WHERE id = ?", [id]);
  }
}
