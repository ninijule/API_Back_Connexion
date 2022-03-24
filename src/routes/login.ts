import express from "express";
import { body } from "express-validator";
import AuthController from "../controller/AuthController";

const router = express.Router();

router.post("/", body("email").isEmail().isLength({ min: 1 }), body("password").escape().stripLow().isLength({ min: 7 }), AuthController.login);

export default router;