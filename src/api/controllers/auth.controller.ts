import { addAdminUser } from "../../repository/users/repository.users"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { Request, Response } from "express"

// TO DO -- validation handler and middleware for requests
// TO DO -- redirect middleware / redirect if success or if failed
// TO DO -- error middleware
// TO DO -- requests sanitization handler 
// TO DO -- verify user middleware/ handler
export const signUpAdminUser = async (req: Request, res: Response): Promise<object> => {
    try {
        // check for phonenumber
        const body = req.body
        console.log(body)

        if(body.phoneNumber !== "09053217299") {
            console.log(body.phoneNumber, typeof body.phoneNumber)
            return res.status(400).json({
                message: 'not an admin user'
            })
        }
        await connectToDb()
        // TO DO check otp sent
        // TO DO create and sign then send jwt token 
        const adminUser = await addAdminUser(body)
        console.log(adminUser)
        await disconnectFromDb()
        return res.status(200).json({
            message: 'admin user created!',
            data: adminUser
        })
    } catch (error) {
        console.log(error)
    }
}