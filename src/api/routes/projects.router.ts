import express from 'express';
import { getProject, getProjects } from '../controllers/projects.controller';
const projectsRouter = express.Router()

projectsRouter.get('/', getProjects)
projectsRouter.get('/p', getProject)


export default projectsRouter