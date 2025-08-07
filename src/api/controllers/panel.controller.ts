
import { getAllUsers } from "../../repository/users/repository.users";
import { connectToDb, disconnectFromDb } from "../handlers/adapter";
import { Request, Response } from "express";


export const getUsers = async (req:Request, res:Response) => {
        await connectToDb();

  console.log('controller')
  const users = await getAllUsers()
  console.log(users)
  return res.status(200).json({
    message: "all users",
    data: users
  })
}