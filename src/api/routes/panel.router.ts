import express from 'express';
import { getBlog, getBlogs } from '../controllers/blogs.controller';
import { createBlog } from '../controllers/panel.controller';
const panelRouter = express.Router()
// blogs
panelRouter.get("/", getBlogs);
panelRouter.get("/blog", getBlog);
panelRouter.post('/blogs', createBlog)
// panelRouter.put('/blogs/:id', updateOneBlog)
// panelRouter.delete('/blogs/:id', deleteOneBlog)
// // services
// panelRouter.get('/services', getAllServices)
// panelRouter.get('/services/:id', getOneService)
// panelRouter.post('/services/:id', createOneService)
// panelRouter.put('/services/:id', updateOneService)
// panelRouter.delete('/services/:id', deleteOneService)

// // projects
// panelRouter.get('/projects', getAllProjects)
// panelRouter.get('/projects/:id', getOneProject)
// panelRouter.post('/projects/:id', createOneProject)
// panelRouter.put('/projects/:id', updateOneProject)
// panelRouter.delete('/projects/:id', deleteOneProject)


// panelRouter.put('logout/:id', logoutUser)

export default panelRouter