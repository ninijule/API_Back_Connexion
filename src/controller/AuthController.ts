import { validationResult } from "express-validator";
import { NextFunction, request, Request, Response } from "express";


export default {
    login: async (req: Request, res:Response, next:NextFunction) => {
        console.log("ici");
    }
}