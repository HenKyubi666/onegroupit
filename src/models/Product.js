import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    imgUrl: String,
    dateOfExpiration: Date,
    calification: Number,
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
