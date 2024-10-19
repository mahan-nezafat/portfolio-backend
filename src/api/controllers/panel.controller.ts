import { addOneBlog } from "../../repository/blogs/repository.blogs"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { Request, Response } from "express"

export const createBlog = async (req: Request, res: Response): Promise<object> => {
    try {

        const body = req.body
        await connectToDb()
        
        const newBlog = await addOneBlog(body)
        console.log(newBlog)
        await disconnectFromDb()
        return res.status(200).json({
            message: 'new blog added!',
            data: newBlog
        })
    } catch (error) {
        console.log(error)
    }
}