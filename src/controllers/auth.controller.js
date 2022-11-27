import User from "../models/User";
import jwt from "jsonwebtoken";
import { SECRET } from "../config";

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userFound = User.find({ email });

  if (!userFound?.email) {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: await User.encryptPassword(password),
    });

    await newUser.save();

    res.status(200).json({ message: "User registred" });
  } else {
    res.status(412).json({ message: "User already exists" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (!userFound?.email)
      return res
        .status(400)
        .json({ userData: null, message: "User not found" });

    const matchPassword = await User.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword)
      return res
        .status(401)
        .json({ userData: null, message: "Invalid password" });

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 86400,
    });

    const userData = {
      id: userFound._doc._id,
      firstName: userFound._doc.firstName,
      lastName: userFound._doc.lastName,
      email: email,
      token: token,
    };

    res.json({ userData, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
