import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";
import login from "../use_case/login";
import LoginRequest from "request/loginRequest";

export default {
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const request: LoginRequest = {
                email: req.body.email,
                password: req.body.password
            }

            try {
                return res.send(await login(request));
            } catch (error) {
                next(error);
            }

        } catch (error) {
            next(error);
        }
    }
}