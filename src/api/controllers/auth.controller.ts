import { addAdminUser, addOneUser, getOneUser } from "../../repository/users/repository.users.js"
import { connectToDb, disconnectFromDb } from "../handlers/adapter.js"
import { NextFunction, Request, Response } from "express"
import { decodeToken, signToken } from "../handlers/jwt.handler.js"
import * as dotenv from 'dotenv'
// import { checkOtp, sendOtp } from "../handlers/otp.handler"
// TO DO -- error middleware 
// TO DO -- validation handler and middleware for requests -- done
// TO DO -- redirect middleware / redirect if success or if failed -- done
// TO DO -- requests sanitization handler -- done
// TO DO -- verify user middleware/ handler -- done
dotenv.config({path: '../../../.env'})

export const signUpAdminUser = async (req: Request, res: Response): Promise<object> => {
    try {
        
        const body = req.body
        
        const payload = {
            ...body,
            role: "ADMIN"
        }
        const token = signToken(payload)

        await connectToDb()
      
        const adminUser = await addAdminUser(body)
        console.log(adminUser)
        await disconnectFromDb()
        return res.status(200).json({
            message: 'admin user created!',
            data: {
                user: adminUser,
                jwt: token
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: 'an error occured',
            data: {
                error
            }
        })
    }
}

export const signUpUser = async (req: Request, res: Response): Promise<object> => {
    try {
       
        const body = req.body
        
        await connectToDb()
        
        const newUser = await addOneUser(body)
        const payload = {
            ...body,
            
        }
        const token = signToken(payload)
        // console.log(newUser)
        await disconnectFromDb()
        return res.status(200).json({
            message: ' user created!',
            data: {
                
                jwt: token
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (req: Request, res: Response): Promise<object> => {
    try {
        await connectToDb()
        const authHeader = req.headers.authorization
        if(!authHeader) {
            // checkotp
        }
        const decodedToken = decodeToken(authHeader.replace("Bearer ", ""))
        // console.log(decodedToken.phoneNumber)
        const user = await getOneUser(decodedToken.phoneNumber)

        await disconnectFromDb()
        return res.status(200).json( {
            message: 'user founded',
            data: user
        })
    } catch (error) {
        console.log(error)
    }
}

// export const sendOtpController = async (req: Request, res: Response) => {
//     const {phoneNumber} = req.body
//     console.log(req.body)
//     const data = await sendOtp(phoneNumber)
//     if(data) {
//         return res.status(200).json({
//             message: "sent",
//             data: phoneNumber
//         })
//     }else return res.status(400).json({
//         message: "failed, bad request",
//         data: phoneNumber
//     })
// }

// export const checkOtpController = async (req: Request, res: Response, next: NextFunction) => {
//     const {phoneNumber, otp} = req.body
//     const data = await checkOtp(phoneNumber, otp)
//     if(data) {
//         res.status(200).json({
//             message: "ok",
//             data:{
//                 user: phoneNumber,
//                 response: "otp correct, user authorized",
                
//             }
//         })
//         return next()
//     }else return res.status(400).json({
//         message: "bad request",
//         data:{
//             user: phoneNumber,
//             response: "failed, user not authorized",
//         }
//     })
// }