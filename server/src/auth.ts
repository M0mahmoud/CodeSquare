import jwt from "jsonwebtoken";
import { getJwtSecret } from "./env.js";
import { JwtObject } from "./types.js";

export function signJWT(obj: JwtObject): string {
  return jwt.sign(obj, getJwtSecret(), {
    expiresIn: "20d",
  });
}

export function verifyJWT(token: string): JwtObject {
  return jwt.verify(token, getJwtSecret()) as JwtObject;
}
