import { IService } from "../../repository/services/interface.services"
import { getAllServices } from "../../repository/services/repository.services"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { Request, Response } from "express"


export const getServices = async (req:Request, res:Response): Promise<Array<IService>> => {
    try {
        await connectToDb()
        const projects = await getAllServices()
        res.status(200).json({
            message: 'ok',
            data: projects
        })
        await disconnectFromDb()
        return 
    } catch (error) {
        console.log(error)
    }
}