import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../handlers/jwt.handler.js";

export const verifyJwtMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        const valid = verifyToken(authHeader.replace("Bearer ", ""))
        if (valid) {
            next();
        }
        // if(!authHeader && opt was valid) 
    } catch (error) {
        console.log(error)
    }
};
