import express from 'express';
import { loginUser, signUpAdminUser, signUpUser } from '../controllers/auth.controller';
import { verifyJwtMiddleware } from '../middlewares/jwt.middleware';
import { validateAuth } from '../middlewares/validation.middleware';
import { loginErrorMiddleware, signUpErrorMiddleware } from '../middlewares/errors.middleware';
import { checkOtp } from '../middlewares/check-otp.middleware';
const authRouter = express.Router()

  // TO DO check otp sent
        // TO DO create and sign then send jwt token 
authRouter.post('/signup/admin', validateAuth, signUpErrorMiddleware, checkOtp ,signUpAdminUser)

authRouter.post('/signup/', validateAuth, signUpErrorMiddleware, checkOtp ,signUpUser)


authRouter.post("/login", validateAuth, loginErrorMiddleware, checkOtp, verifyJwtMiddleware, loginUser)

export default authRouter