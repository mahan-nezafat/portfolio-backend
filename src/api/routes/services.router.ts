import express from 'express';
import { getServices } from '../controllers/services.controller.js';
const servicesRouter = express.Router()

servicesRouter.get('/', getServices)
// servicesRouter.get('/:id', getOneService)


export default servicesRouter