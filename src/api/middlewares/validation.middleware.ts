import { NextFunction, Request, Response } from "express";
import * as yup from 'yup'
export const validateBlogMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
    
    const body = req.body
    const blogSchema = yup.object().shape({
        authorId: yup.number().required("author id is needed").positive().integer().typeError("author id is a number").strict(),
        title: yup.string().required("title is needed").typeError("title must be string").label("blog title").strict(),
        status: yup.string().required("status must not be empty").typeError("status must be string").strict(),
        thumbnail: yup.string().required("thumbnail must not be empty").typeError("thumbnail must be string").strict(),
        category: yup.string().required("category must not be empty").typeError("category must be string").strict(),
        readtime: yup.number().required("readtime must not be empty").positive().integer().strict(),
        authorSummary: yup.string().required("authorSummary must not be empty").typeError("authorSummary must be string").strict(),
        content: yup.array().required("content must be an array and not empty").strict(),
        language: yup.string().required("language must not be empty").typeError("language must be string").strict(),
    })
    console.log(body)
    const validatedBody = await blogSchema.validate(body)
    next()    
}

    catch(error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
}


export const validateServiceMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    const body = req.body
    const serviceSchema = yup.object().shape({
        authorId: yup.number().required("author id is needed").positive().integer().typeError("author id is a number").strict(),
        name: yup.string().required("name is needed").typeError("name must be string").strict(),
        thumbnailSrc: yup.string().required("thumbnailSrc must not be empty").typeError("thumbnailSrc must be string").strict(),
        price: yup.number().required("price must not be empty").positive().integer().strict(),
        content: yup.array().required("content must be an array and not empty").strict(),
    })
    console.log(body)
    const validatedBody = await serviceSchema.validate(body)
    next()    
}

    catch(error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
}

export const validateProjectMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
    const body = req.body
    const projectSchema = yup.object().shape({
        authorId: yup.number().required("author id is needed").positive().integer().typeError("author id is a number").strict(),
        name: yup.string().required("name is needed").typeError("name must be string").strict(),
        description: yup.string().required("description must not be empty").typeError("description must be string").strict(),
        thumbnailSrc: yup.string().required("thumbnailSrc must not be empty").typeError("thumbnailSrc must be string").strict(),
        videoSrc: yup.string().required("videoSrc must not be empty").typeError("videoSrc must be string").strict(),
        linkUrl: yup.string().required("linkUrl must not be empty").typeError("linkUrl must be string").strict(),
        
    })
    console.log(body)
    const validatedBody = await projectSchema.validate(body)
    next()    
}

    catch(error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
}