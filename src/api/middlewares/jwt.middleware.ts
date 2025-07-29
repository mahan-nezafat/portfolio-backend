import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../handlers/jwt.handler.js";

export const verifyJwtMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {otp} = req.body
        
        const authHeader = req.headers.authorization;
        if(!authHeader && otp)  return next()
        const valid = verifyToken(authHeader.replace("Bearer ", ""))
        if (valid) {
            next();
        }
    } catch (error) {
        console.log(error)
    }
};
