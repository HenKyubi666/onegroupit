import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";
import { authJwt, verifySignUp } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted],
  userController.createUser
);

router.get("/", userController.getUsers);
export default router;

// router.delete('/',, userController.deleteUserById)
