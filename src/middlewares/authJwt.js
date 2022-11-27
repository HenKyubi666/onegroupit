import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(token, SECRET);

    req.body.userId = decoded.id;

    const user = await User.findById(req.body.userId, { password: 0 });

    if (!user) return res.status(404).json({ message: "User not exist" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
