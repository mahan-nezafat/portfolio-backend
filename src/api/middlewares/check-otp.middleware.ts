import { NextFunction, Request, Response } from "express";
import { checkOtp } from "../handlers/otp.handler.js";

export const checkOtpMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
        console.log("check")

    const { phoneNumber, otp } = req.body;
    const authHeader = req.headers.authorization;
    const data = await checkOtp(phoneNumber, otp);
    if (data) {
        return next();
    } else if (authHeader && authHeader.includes("Bearer")) {
        return next();
    } else {
        console.log(req.body)
        return res.status(400).json({
            message: "bad request",
            data: {
                user: phoneNumber,
                response: "failed, user not authorized",
            },
        });
    }
};
