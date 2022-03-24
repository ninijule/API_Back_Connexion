"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const login_1 = __importDefault(require("../use_case/login"));
exports.default = {
    login: async (req, res, next) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const request = {
                email: req.body.email,
                password: req.body.password
            };
            return res.send(await (0, login_1.default)(request));
        }
        catch (error) {
            next(error);
        }
    }
};
//# sourceMappingURL=AuthController.js.map