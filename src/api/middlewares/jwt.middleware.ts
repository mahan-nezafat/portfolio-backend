import { NextFunction, Request, Response } from "express";





export const verifyJwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)
}