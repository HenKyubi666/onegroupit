import User from "../models/User";
import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password, roles } = req.body;

  console.log(req.body)

  const userFound = User.find({ email });

  console.log(userFound);


  if (!userFound?.email) {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    await newUser.save();

    res.status(200).json({ message: "User registred" });
  } else {
    res.status(412).json({ message: "User already exists" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email }).populate("roles");

  if (!userFound?.email)
    return res.status(400).json({ userData: null, message: "User not found" });

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
};
