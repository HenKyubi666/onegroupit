import { Router } from "express";
const router = Router();

import * as authController from "../controllers/auth.controller";
import { verifySignUp } from "../middlewares";

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  authController.signUp
);

router.post("/signin", authController.signIn);

export default router;
