import express from 'express';
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controllers/blogs.controller.js';
import { createService, deleteService, getService, getServices, updateService } from '../controllers/services.controller.js';
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controllers/projects.controller.js';
import { validateBlogMiddleware, validateProjectMiddleware, validateServiceMiddleware } from '../middlewares/validation.middleware.js';
// import multer from 'multer'
import {upload} from '../../../s3/storage.handler.js'
// import { uploadThumbnailMiddleware } from '../middlewares/upload.middleware';
import { verifyJwtMiddleware } from '../middlewares/jwt.middleware.js';
import multer from 'multer';
import { getAllUsers } from '../../repository/users/repository.users.js';
import { getUsers } from '../controllers/panel.controller.js';
const panelRouter = express.Router()
// const upload1 = multer({dest: './uploads'})
// blogs
panelRouter.get("/blogs", verifyJwtMiddleware, getBlogs);
panelRouter.get("/blog", verifyJwtMiddleware, getBlog);
panelRouter.post('/blogs', verifyJwtMiddleware, upload.single("thumbnailfile"),validateBlogMiddleware, createBlog)
panelRouter.put('/blogs/:id', verifyJwtMiddleware, upload.single("thumbnailfile"),validateBlogMiddleware , updateBlog)
panelRouter.put('/uploadthumbnail/:id', verifyJwtMiddleware,upload.single("thumbnail"), updateBlog)
panelRouter.delete('/blogs/:id',verifyJwtMiddleware, deleteBlog)
// // services
panelRouter.get("/services", getServices);
panelRouter.get("/service", getService);
panelRouter.post('/services',verifyJwtMiddleware, validateServiceMiddleware, createService)
panelRouter.put('/services/:id',verifyJwtMiddleware, validateServiceMiddleware, verifyJwtMiddleware, updateService)
panelRouter.put('/services/uploadthumbnail/:id',verifyJwtMiddleware, verifyJwtMiddleware,upload.single("thumbnail"), updateService)
panelRouter.delete('/services/:id', verifyJwtMiddleware,deleteService)

// // projects
panelRouter.get("/projects", verifyJwtMiddleware, getProjects);
panelRouter.get("/project", verifyJwtMiddleware, getProject);
panelRouter.post('/projects', verifyJwtMiddleware, upload.single("videoSrc"), validateProjectMiddleware, createProject)
panelRouter.put('/projects/:id', verifyJwtMiddleware,upload.single("videoSrc"),validateProjectMiddleware, updateProject)
panelRouter.put('/projects/uploadthumbnail/:id' , verifyJwtMiddleware,upload.single("thumbnail"), updateProject)
panelRouter.put('/projects/uploadvideo/:id' , verifyJwtMiddleware,upload.single("video"), updateProject)
panelRouter.delete('/projects/:id', verifyJwtMiddleware,deleteProject)


// panelRouter.put('logout/:id', logoutUser)
panelRouter.get("/users", verifyJwtMiddleware, getUsers)

export default panelRouter