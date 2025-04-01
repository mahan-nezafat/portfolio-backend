export const generateOtp = ():string => {
    const randomNumber:number = Math.random();
    const otp:string = (randomNumber * 10_000_000).toFixed(0).slice(0,6)
    // console.log(otp)
    return otp
}

// generateOtp()