import { validationResult } from "express-validator";
import { NextFunction, request, Request, Response } from "express";


export default {
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

        } catch (error) {
            next(error);
        }
    }
}