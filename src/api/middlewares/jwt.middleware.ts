import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../handlers/jwt.handler.js";

export const verifyJwtMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log("jwt")
        const {otp} = req.body
        
        if(otp)  return next()
        
        const authHeader = req.headers.authorization;

        // const valid = authHeader ? verifyToken(authHeader.replace("Bearer ", "")) : null
        const valid = verifyToken(req.cookies.jwt)
        if (valid) {
            next();
        }
    } catch (error) {
        console.log(error)
    }
};
