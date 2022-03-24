import express from "express";
import { body } from "express-validator";
import AuthController from "../controller/AuthController";

const router = express.Router();

router.post("/", body("email").isEmail(), body("password").escape().stripLow().isLength({ min: 5 }), AuthController.login);

export default router;