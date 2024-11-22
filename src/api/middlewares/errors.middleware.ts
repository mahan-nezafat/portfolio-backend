import { NextFunction, Request, Response } from "express";

// TO DO -- validation / sanitization handler and middleware for requests using YUP ----- DONE
// -- ADD s3 bucket for images and videos -- done
// -- CREATE logging file per day by morgan -- done
// -- GET ssl cert route request on https for backend -- done
// TO DO -- verify user middleware/ handler -- done
// TO DO create and sign then send jwt token -- done

// TO DO
// -- check useraccess middleware
// -- redirect middleware / redirect if success or if failed
// -- error middleware
// -- check otp send otp
// -- setup docker compose :
    // -- setup postgresql container securely
    // -- setup nginx container
    //-------------------------//
    // -- setup nextjs container -- not now
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