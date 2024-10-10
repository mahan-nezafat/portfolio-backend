import { Request, Response } from "express"
import { IBlog } from "../../repository/blogs/interface.blogs"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { getAllBlogs, getOneBlog } from "../../repository/blogs/repository.blogs"

export const getBlogs = async (req:Request, res:Response): Promise<Array<IBlog>> => {
    try {
        await connectToDb()
        const blogs = await getAllBlogs()
        res.status(200).json({
            message: 'ok',
            data: blogs
        })
        console.log('gg')
        await disconnectFromDb()
        return blogs 
    } catch (error) {
        console.log(error)
    }
}

export const getBlog = async (req:Request, res:Response): Promise<IBlog> => {
    try {
        const id = req.params.id
        console.log(id)
        await connectToDb()
        const blog = await getOneBlog(Number(id))
        res.status(200).json({
            message: 'ok',
            data: blog
        })
        console.log(blog)

        await disconnectFromDb()
        return blog
    } catch (error) {
        console.log(error)
    }

}

export const getSortedBlogs = async (req:Request, res:Response) => {
    try {
        const query = req.query
        // await connectToDb()
        // let blogs;
        console.log(query)
        // if(query === "oldest") {
        //     blogs = await getOldestBlogs()
        // }
        // res.json({
        //     message: "query",
        //     data: query
        // })
        return query
    } catch (error) {
        console.log(error)
    }
}


// export const incViews = async (req:Request, res:Response): Promise<IBlog> => {
    
// }

// export const incUpvote = async (req:Request, res:Response): Promise<IBlog> => {
    
// }