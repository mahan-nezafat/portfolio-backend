import { Request, Response } from "express"
import { IBlog } from "../../repository/blogs/interface.blogs"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { getAllBlogs, getOldestBlogs, getOneBlog, getRecentBlogs, incrementUpvotes, incrementViews } from "../../repository/blogs/repository.blogs"

// TO DO
    // -- CREATE HANDLER FOR SORT REQUEST
    // -- CREATE MIDDLEWARE FOR ERROR MANAGEMENT



// sending all blogs

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

// sending blog founded by id

export const getBlog = async (req:Request, res:Response): Promise<IBlog> => {
    try {
        const id = req.params.id
        console.log(id)
        // check for correct request format
        if(!id) {
            res.status(400).json({
                message: 'wrong parameter recieved!'
            })
            return
        }
        await connectToDb()
        const blog = await getOneBlog(Number(id))
        // return if blog not founded
        if(!blog || typeof blog === "undefined") {
            res.status(404).json({
                message: 'blog not founded!',

            })
            return
        }
        res.status(200).json({
            message: 'ok',
            data: blog
        })
        
        // increase view per request
        await incrementViews(Number(id))
        await disconnectFromDb()
        return blog
    } catch (error) {
        console.log(error)
    }

}

// per request view increase or per unique request view increase


// sending sorted response

export const getSortedBlogs = async (req:Request, res:Response): Promise<object> => {
    try {
        const {orderby} = req.query
        await connectToDb()
        let blogs: object;
        console.log(orderby)
        if(orderby === "oldest") {
            blogs = await getOldestBlogs()
            res.status(200).json({
            message: "sort was successful!",
            data: blogs
            })
            await disconnectFromDb()
            return 
        }else if(orderby === "recent") {
            blogs = await getRecentBlogs()
             res.status(200).json({
            message: "sort was successful!",
            data: blogs
        })
            await disconnectFromDb()
            return 
        
        }else {
            res.status(400).json({
                message: 'recieved query was not founded!',
                data: orderby
            })
            await disconnectFromDb()
            return 
        }
        
    } catch (error) {
        console.log(error)
    }
}

// increment upvote

export const incUpvote = async (req:Request, res:Response) => {
    try {
        const {id} = req.query
        if(!id) {
            res.status(400).json({
                message: 'wrong parameter recieved!'
            })
            return
        }
        await connectToDb()
        const result = await incrementUpvotes(Number(id))
        if(result) {
            res.status(200).json({message: "upvote count increased!"})
            return disconnectFromDb() 
        }
        res.status(404).json({message: "blog not founded!"})
        return disconnectFromDb() 
        
    } catch (error) {
        console.log(error)
    }
}   