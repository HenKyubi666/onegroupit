import { Router } from "express";
const router = Router();

import * as productsController from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken],
  productsController.createProduct
);

router.get("/", productsController.getProducts);

router.get("/:productId", productsController.getProductById);

router.put(
  "/:productId",
  [authJwt.verifyToken],
  productsController.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken],
  productsController.deleteProductById
);

export default router;
