import express from 'express';
const blogsRouter = express.Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.get('/:id', getAllBlogs)


export default blogsRouter