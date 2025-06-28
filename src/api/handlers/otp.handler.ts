// @ts-nocheck

import * as dotenv from "dotenv";
import { generateOtp } from "../../utils/generate-otp";
import { deleteOtp, isCached, loadOtp, saveOtp } from "../../utils/cache";
dotenv.config({ path: "../../../.env" });

interface OtpSMS {
    mobile: string,
    templateId: number,
    parameters: object[]
}

export const sendOtp = async (phoneNumber: string) => {

    //gen rand number
    const otp:string = generateOtp()
    // save rand num with phone number in an object in memory set with expire date
    saveOtp({phoneNumber, otp});
    const data:OtpSMS = {
        mobile: phoneNumber,
        templateId: 466033,
        parameters: [{ name: "CODE", value: otp }],
    };
    const res = await fetch("https://api.sms.ir/v1/send/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
            "x-api-key": process.env.OTP_API_KEY,
        },
        body: JSON.stringify(data),
    });
    // console.log(res);
    return res.ok
};

export const checkOtp = async (phoneNumber: string, otp: string) => {
    if(isCached(phoneNumber)) {
       const data = loadOtp(phoneNumber)
       if(data.otp === otp) {
        deleteOtp(phoneNumber)
        return true
       }
       else return false
    }
    return false 
    
}


