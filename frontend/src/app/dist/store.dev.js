"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));

var _transactionSlice = _interopRequireDefault(require("../features/transactions/transactionSlice"));

var _requestSlice = _interopRequireDefault(require("../features/request/requestSlice"));

var _uploadSlice = _interopRequireDefault(require("../features/upload/uploadSlice"));

var _verifySlice = _interopRequireDefault(require("../features/verify/verifySlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    auth: _authSlice["default"],
    transact: _transactionSlice["default"],
    request: _requestSlice["default"],
    upload: _uploadSlice["default"],
    verify: _verifySlice["default"]
  }
});
exports.store = store;
//# sourceMappingURL=store.dev.js.map
