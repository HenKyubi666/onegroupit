import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    imgUrl: String,
    calification: Number,
    administratorId: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
