"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const login = {
    router: login_1.default,
    path: "/login",
};
exports.default = [login];
//# sourceMappingURL=index.js.map