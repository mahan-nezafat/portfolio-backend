import express from 'express';
const blogsRouter = express.Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.get('/:id', getOneBlog)


export default blogsRouter