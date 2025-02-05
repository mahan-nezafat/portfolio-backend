import express from 'express';
import { loginUser, signUpAdminUser, signUpUser } from '../controllers/auth.controller';
import { verifyJwtMiddleware } from '../middlewares/jwt.middleware';
import { validateAuth } from '../middlewares/validation.middleware';
import { loginErrorMiddleware, signUpErrorMiddleware } from '../middlewares/errors.middleware';
import { checkOtp } from '../middlewares/check-otp.middleware';
const authRouter = express.Router()

  // TO DO check otp sent
        // TO DO create and sign then send jwt token 

/**
 * @swagger
/signup/admin:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstname
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastname
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: phoneumber
 *         in: formData
 *         required: true
 *         type: string 
 */
authRouter.post('/signup/admin', validateAuth, signUpErrorMiddleware, checkOtp ,signUpAdminUser)

authRouter.post('/signup/', validateAuth, signUpErrorMiddleware, checkOtp ,signUpUser)


authRouter.post("/login", validateAuth, loginErrorMiddleware, checkOtp, verifyJwtMiddleware, loginUser)

// authRouter.post("/send-otp", sendOtp)
// authRouter.post("/check-otp")

export default authRouter