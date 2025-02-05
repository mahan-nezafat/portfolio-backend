import { addAdminUser, addOneUser, getOneUser } from "../../repository/users/repository.users"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { Request, Response } from "express"
import { decodeToken, signToken } from "../handlers/jwt.handler"
import * as dotenv from 'dotenv'
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

// export const sendOtp = async () => {
//     const data = {
//         phoneNumber: "09053217299",
//         templateId: "294456",
//         "parameters": [
//             {name: "code" , value: "123456"}
//           ],
//     }
//     const res = fetch('https://api.sms.ir/v1/send/verify', {
//         method: 'post',
//         url: 'https://api.sms.ir/v1/send/verify',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'text/plain',
//           'x-api-key': 'YOURAPIKEY'
//         },
//         data
//     })
//     console.log(res)
// }

// sendOtp()