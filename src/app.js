import express from "express";
import morgan from "morgan";
import cors from 'cors'

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
// import userRoutes from "./routes/user.routes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(
  cors({
    origin: "https://master--onegroupit-frontend.netlify.app",
  })
);

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

export default app;
