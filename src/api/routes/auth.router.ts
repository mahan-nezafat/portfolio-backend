import express from 'express';
import { signUpAdminUser } from '../controllers/auth.controller';
const authRouter = express.Router()

// authRouter.post('/login' logInUser)
authRouter.post('/signup/admin', signUpAdminUser)


export default authRouter