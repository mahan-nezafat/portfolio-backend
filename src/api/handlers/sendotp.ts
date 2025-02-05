import * as dotenv from 'dotenv'
dotenv.config({path: '../../../.env'})

export const sendOtp = async () => {
    const data = {
        phoneNumber: "9053217299",
        templateId: "294456",
        "parameters": [
            {name: "CODE" , value: "123456"}
          ],
    }
    const res = await fetch('https://api.sms.ir/v1/send/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain',
          'x-api-key': process.env.OTP_API_KEY
        },
        body: JSON.stringify(data)
    })
    console.log(res)
}

sendOtp()