import { NextFunction, Request, Response } from "express"
import { sendOtp } from "../handlers/otp.handler"

export const sendOtpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const {phoneNumber} = req.body
    console.log(req.body)
    const data = await sendOtp(phoneNumber)
    if(data) {
        return res.status(200).json({
            message: "otp sent",
            data: phoneNumber
        })
    }else return res.status(400).json({
        message: "failed, bad request",
        data: phoneNumber
    })
}