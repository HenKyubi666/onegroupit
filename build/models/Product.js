"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productSchema = new _mongoose.Schema({
  name: String,
  price: Number,
  imgUrl: String,
  dateOfExpiration: Date,
  calification: Number,
  userId: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Product", productSchema);
exports["default"] = _default;