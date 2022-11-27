import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken],
  userController.createUser
);

router.get("/", userController.getUsers);
export default router;

// router.delete('/',, userController.deleteUserById)
