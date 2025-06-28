// @ts-nocheck

export const sendSms = async (phoneNumber: string, firstName: string, lastName: string) => {

    const data = {
        mobile: phoneNumber,
        templateId: 614109,
        parameters: [{ name: "user", value: `${firstName} ${lastName}` }],
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