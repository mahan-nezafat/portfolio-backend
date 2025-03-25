export const generateOtp = ():string => {
    const randomNumber:number = Math.random();
    const otp:string = (randomNumber * 1_000_000).toFixed(0)
    return otp
}