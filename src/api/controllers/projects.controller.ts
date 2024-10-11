import { Request, Response } from "express"
import { IProject } from "../../repository/projects/interface.projects"
import { connectToDb, disconnectFromDb } from "../handlers/adapter"
import { getAllProjects, getOneProject } from "../../repository/projects/repository.projects"

export const getProjects = async (req:Request, res:Response): Promise<Array<IProject>> => {
    try {
        await connectToDb()
        const projects = await getAllProjects()
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

// sending project founded by id

export const getProject = async (req:Request, res:Response): Promise<object> => {
    try {
        const {id} = req.query
        console.log(id)
        // check for correct request format
        if(!id || isNaN(Number(id))) {
            res.status(400).json({
                message: 'wrong parameter recieved!'
            })
            return
        }
        await connectToDb()
        const project = await getOneProject(Number(id))
        // return if project not founded
        console.log(project)
        if(!project || typeof project === "undefined") {
            res.status(404).json({
                message: 'project not founded!',

            })
            await disconnectFromDb()
            return
        }
        else {
            res.status(200).json({
                message: 'ok',
                data: project
            })
            await disconnectFromDb()
            return project
        }
        
     
       
    } catch (error) {
        console.log(error)
    }

}