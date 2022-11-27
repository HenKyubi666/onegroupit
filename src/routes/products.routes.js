import { Router } from "express";
const router = Router();

import * as productsController from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  // [authJwt.verifyToken, authJwt.isAdmin],
  [authJwt.verifyToken],
  productsController.createProduct
);

router.get("/", productsController.getProducts);

router.get("/:productId", productsController.getProductById);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsController.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsController.deleteProductById
);

export default router;
