import { verifyJWT } from "../auth.js";
import { db } from "../datastore/index.js";
import { ExpressHandler } from "../types.js";

const authMiddleware: ExpressHandler<any, any> = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const payload = verifyJWT(token);

    const user = await db.getUserById(payload.userId);
    if (!user) {
      throw "User not found";
    }

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Bad Token" });
  }
};

export default authMiddleware;
