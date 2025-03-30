import { NextFunction, Request, Response } from "express";



// TO DO
// -- setup postgresql container securely
// -- setup nginx container
//-------------------------//
// -- error middleware -- not now
// -- redirect middleware / redirect if success or if failed -- not now
    // -- setup redis -- later -- not now
    // -- SET swagger for api docs -- not now

export const blogsErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {orderby} = req.query
    if(!orderby) return res.status(400).json({message: 'no query was sent!'})
    if(typeof Number(orderby) !== 'string') return res.status(400).json({message: "wrong query type was sent!"})
    if(orderby === "oldest") return next()
}

export const signUpErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    console.log(body)

    if(body.phoneNumber.length != 11) {
        console.log(body.phoneNumber, typeof body.phoneNumber)
        return res.status(400).json({
            message: 'not a valid phonenumber'
        })
    }
    next()
}

export const loginErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next()
}