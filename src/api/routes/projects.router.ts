import express from 'express';
const projectsRouter = express.Router()

projectsRouter.get('/', getAllProjects)
projectsRouter.get('/:id', getOneProject)


export default projectsRouter