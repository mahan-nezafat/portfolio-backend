import { addAdminUser, addOneUser, getOneUser } from "../../repository/users/repository.users.js";
import { connectToDb, disconnectFromDb } from "../handlers/adapter.js";
import { NextFunction, Request, Response } from "express";
import { decodeToken, signToken } from "../handlers/jwt.handler.js";
import * as dotenv from "dotenv";
// import { checkOtp, sendOtp } from "../handlers/otp.handler"
// TO DO -- error middleware
// TO DO -- validation handler and middleware for requests -- done
// TO DO -- redirect middleware / redirect if success or if failed -- done
// TO DO -- requests sanitization handler -- done
// TO DO -- verify user middleware/ handler -- done
dotenv.config({ path: "../../../.env" });

export const signUpAdminUser = async (req: Request, res: Response): Promise<object> => {
  try {
    const body = req.body;

    const payload = {
      ...body,
      role: "ADMIN",
    };
    const token = signToken(payload);

    await connectToDb();

    const adminUser = await addAdminUser(body);
    console.log(adminUser);
    await disconnectFromDb();
    return res.status(200).json({
      message: "admin user created!",
      data: {
        user: adminUser,
        jwt: token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "an error occured",
      data: {
        error,
      },
    });
  }
};

export const signUpUser = async (req: Request, res: Response): Promise<object> => {
  try {
    const body = req.body;

    await connectToDb();

    const newUser = await addOneUser({ ...body, role: "CUSTOMER" });
    const payload = {
      ...body,
    };
    const token = signToken(payload);
    // console.log(newUser)
    await disconnectFromDb();
    return res.status(200).json({
      message: " user created!",
      data: {
        jwt: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    await connectToDb();
    let user, token;
    const jwt = req.cookies.jwt
    console.log("controller");
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (jwt && jwt != "undefined") {
      // checkotp
      const decodedToken = decodeToken(jwt);
      user = await getOneUser(decodedToken.phoneNumber);
    } else {
      const payload = {
        ...req.body,
      };
      const { phoneNumber } = req.body;
      if (phoneNumber != "09053217299") {
        return res.status(403).json({
          message: "you are not authorized",
        });
      }
      token = signToken(payload);

      user = await getOneUser(phoneNumber);
    }
    // console.log(decodedToken.phoneNumber)

    console.log(user);
    return res
      .cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: true,
        sameSite: "lax",
        path: "/",
      })
      .status(200)
      .json({
        ok: "ok",
        message: "login successful!",
        data: user,
      });
  } catch (error) {
    console.log(error);
  }
};
