import express from 'express';
import { loginUser, signUpAdminUser, signUpUser } from '../controllers/auth.controller.js';
import { verifyJwtMiddleware } from '../middlewares/jwt.middleware.js';
import { validateAuth } from '../middlewares/validation.middleware.js';
import { loginErrorMiddleware, signUpErrorMiddleware } from '../middlewares/errors.middleware.js';
import {  checkOtpMiddleware } from '../middlewares/check-otp.middleware.js';
import { requestConsultation } from '../controllers/services.controller.js';
import { sendOtpMiddleware } from '../middlewares/send-otp.js';
const authRouter = express.Router()

  

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
authRouter.post('/signup/admin', validateAuth, signUpErrorMiddleware, checkOtpMiddleware ,signUpAdminUser)

authRouter.post('/signup/', validateAuth, signUpErrorMiddleware, checkOtpMiddleware ,signUpUser)


authRouter.post("/login", validateAuth, loginErrorMiddleware, checkOtpMiddleware, verifyJwtMiddleware, loginUser)

authRouter.post("/send-otp", sendOtpMiddleware)

authRouter.post("/request-consultation",validateAuth,  checkOtpMiddleware, requestConsultation)

export default authRouter