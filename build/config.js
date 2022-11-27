"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var SECRET = process.env.SECRET;
exports.SECRET = SECRET;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;