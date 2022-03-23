import express from "express";
import { body } from "express-validator";
import AuthController from "../controller/AuthController";

const router = express.Router();

router.get("/login", body("email").stripLow().escape().isLength({ min: 0, max: 80 }), body("password").stripLow().escape().isLength({ min: 0 }), AuthController.login);

export default router;