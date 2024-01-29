import { User } from "src/types.js";

export interface UserDao {
  createUser(user: User): void;
  getUserByEmail(email: string): User | undefined;
  getUserByUsername(username: string): User | undefined;
}
