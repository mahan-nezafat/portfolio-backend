import express from 'express';
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controllers/blogs.controller';
import { createService, deleteService, getService, getServices, updateService } from '../controllers/services.controller';
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controllers/projects.controller';
import { validateBlogMiddleware, validateProjectMiddleware, validateServiceMiddleware } from '../middlewares/validation.middleware';
const panelRouter = express.Router()
// blogs
panelRouter.get("/blogs", getBlogs);
panelRouter.get("/blog", getBlog);
panelRouter.post('/blogs', validateBlogMiddleware , createBlog)
panelRouter.put('/blogs/:id', validateBlogMiddleware , updateBlog)
panelRouter.delete('/blogs/:id', deleteBlog)
// // services
panelRouter.get("/services", getServices);
panelRouter.get("/service", getService);
panelRouter.post('/services', validateServiceMiddleware, createService)
panelRouter.put('/services/:id', validateServiceMiddleware, updateService)
panelRouter.delete('/services/:id', deleteService)

// // projects
panelRouter.get("/projects", getProjects);
panelRouter.get("/project", getProject);
panelRouter.post('/projects', validateProjectMiddleware, createProject)
panelRouter.put('/projects/:id', validateProjectMiddleware, updateProject)
panelRouter.delete('/projects/:id', deleteProject)


// panelRouter.put('logout/:id', logoutUser)

export default panelRouter