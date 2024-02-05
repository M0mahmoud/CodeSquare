import { pbkdf2Sync, randomUUID } from "crypto";
import { SignInReq, SignInRes, SignUpReq, SignUpRes } from "../api.js";
import { signJWT } from "../auth.js";
import { db } from "../datastore/index.js";
import { ExpressHandler, User } from "../types.js";

export const SignUpHandler: ExpressHandler<SignUpReq, SignUpRes> = async (
  req,
  res
) => {
  // TODO: validations
  const { email, firstName, lastName, password, username } = req.body;
  if (!email || !firstName || !lastName || !password || !username) {
    return res.status(400).json({ msg: "Something missing..." });
  }

  const existingUser =
    (await db.getUserByEmail(email)) || (await db.getUserByUsername(username));
  if (existingUser) {
    return res.status(403).json({ msg: "User already exists" });
  }

  const newUser: User = {
    id: randomUUID(),
    email,
    firstName,
    lastName,
    username,
    password: hashPass(password),
  };
  const jwt = signJWT({ userId: newUser.id });
  await db.createUser(newUser);
  return res.status(200).json({ jwt });
};

export const SignInHandler: ExpressHandler<SignInReq, SignInRes> = async (
  req,
  res
) => {
  // TODO: validations
  const { login, password } = req.body;
  if (!login || !password) {
    return res.sendStatus(400);
  }

  const existingUser =
    (await db.getUserByEmail(login)) || (await db.getUserByUsername(login));
  if (!existingUser || existingUser.password !== hashPass(password)) {
    return res.sendStatus(403);
  }

  const jwt = signJWT({
    userId: existingUser.id,
  });

  return res.status(200).json({
    jwt,
    user: {
      id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
    },
  });
};

const hashPass = (password: string): string => {
  return pbkdf2Sync(
    password,
    process.env.PASSWORD_SALT!,
    Number(process.env.PASSWORD_ITERATIONS!),
    Number(process.env.PASSWORD_KEYLEN!),
    process.env.PASSWORD_DIGEST!
  ).toString();
};
