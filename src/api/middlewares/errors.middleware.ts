import { NextFunction, Request, Response } from "express";

export const blogsErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {orderby} = req.query
    if(!orderby) return res.status(400).json({message: 'no query was sent!'})
    if(typeof Number(orderby) !== 'string') return res.status(400).json({message: "wrong query type was sent!"})
    if(orderby === "oldest") return next()
}