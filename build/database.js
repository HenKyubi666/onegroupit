"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect(_config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useFindAndModify: true,
  // useCreateIndex: true,
}).then(function (db) {
  return console.log("DB connected ".concat(db.connection.name));
})["catch"](function (error) {
  return console.log(error);
});