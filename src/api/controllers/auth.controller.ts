import { addAdminUser, addOneUser } from "../../repository/users/repository.users"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { Request, Response } from "express"
import { signToken } from "../handlers/jwt.handler"

// TO DO -- validation handler and middleware for requests
// TO DO -- redirect middleware / redirect if success or if failed
// TO DO -- error middleware
// TO DO -- requests sanitization handler 
// TO DO -- verify user middleware/ handler
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
    return
}