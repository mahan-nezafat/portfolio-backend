import { NextFunction, Request, Response } from "express";
import { checkOtp } from "../handlers/otp.handler";

export const checkOtpMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { phoneNumber, otp } = req.body;
    const authHeader = req.headers.authorization;
    const data = await checkOtp(phoneNumber, otp);
    if (data) {
        return next();
    } else if (authHeader.includes("Bearer")) {
        return next();
    } else {
        return res.status(400).json({
            message: "bad request",
            data: {
                user: phoneNumber,
                response: "failed, user not authorized",
            },
        });
    }
};
