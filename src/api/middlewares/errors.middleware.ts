import { NextFunction, Request, Response } from "express";

// TO DO -- validation handler and middleware for requests

// TO DO -- redirect middleware / redirect if success or if failed

// TO DO -- error middleware

// TO DO -- requests sanitization handler

// TO DO -- verify user middleware/ handler 

// TO DO check otp sent

// TO DO create and sign then send jwt token

// TO DO
// -- CREATE HANDLER FOR SORT REQUEST
// -- CREATE MIDDLEWARE FOR ERROR MANAGEMENT
// -- ADD s3 bucket for images and videos
// -- CREATE logging file per day by morgan
// -- GET ssl cert route request on https for backend
// -- SET swagger for api docs

export const blogsErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {orderby} = req.query
    if(!orderby) return res.status(400).json({message: 'no query was sent!'})
    if(typeof Number(orderby) !== 'string') return res.status(400).json({message: "wrong query type was sent!"})
    if(orderby === "oldest") return next()
}