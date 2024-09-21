import express from 'express';
const servicesRouter = express.Router()

servicesRouter.get('/', getAllServices)
servicesRouter.get('/:id', getOneService)


export default servicesRouter