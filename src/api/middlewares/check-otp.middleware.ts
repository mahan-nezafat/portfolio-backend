import { NextFunction, Request, Response } from "express";


export const checkOtp = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
      // checkotp if valid next the jwt verify middleware
      // if not redirect 
      // if not but have auth header next 
    } catch (error) {
        console.log(error)
    }
};
