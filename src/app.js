import express from "express";
import morgan from "morgan";

import productsRoutes from "./routes/products.routes";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("on /");
});

app.use('/products',productsRoutes);

export default app;
