"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const AuthController_1 = __importDefault(require("../controller/AuthController"));
const router = express_1.default.Router();
router.get("/login", (0, express_validator_1.body)("email").stripLow().escape().isLength({ min: 0, max: 80 }), (0, express_validator_1.body)("password").stripLow().escape().isLength({ min: 0 }), AuthController_1.default.login);
exports.default = router;
//# sourceMappingURL=login.js.map