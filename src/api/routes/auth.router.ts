import express from 'express';
import { loginUser, signUpAdminUser, signUpUser } from '../controllers/auth.controller';
import { verifyJwtMiddleware } from '../middlewares/jwt.middleware';
import { validateAuth } from '../middlewares/validation.middleware';
import { loginErrorMiddleware, signUpErrorMiddleware } from '../middlewares/errors.middleware';
const authRouter = express.Router()

  // TO DO check otp sent
        // TO DO create and sign then send jwt token 
authRouter.post('/signup/admin', validateAuth, signUpErrorMiddleware ,signUpAdminUser)
authRouter.post('/signup/', validateAuth, signUpErrorMiddleware ,signUpUser)


authRouter.post("/login", validateAuth, loginErrorMiddleware, verifyJwtMiddleware, loginUser)

export default authRouter