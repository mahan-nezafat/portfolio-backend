import { Request, Response } from "express";
import { IProject } from "../../repository/projects/interface.projects.js";
import { connectToDb, disconnectFromDb } from "../handlers/adapter.js";
import {
    addOneProject,
    deleteOneProject,
    getAllProjects,
    getOneProject,
    updateOneProject,
} from "../../repository/projects/repository.projects.js";

export const getProjects = async (
    req: Request,
    res: Response
): Promise<Array<IProject>> => {
    try {
        await connectToDb();
        const projects = await getAllProjects();
        res.status(200).json({
            message: "ok",
            data: projects,
        });
        await disconnectFromDb();
        return;
    } catch (error) {
        console.log(error);
    }
};

// sending project founded by id

export const getProject = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        const { id } = req.query;   
        console.log(id);
        // check for correct request format
        if (!id || isNaN(Number(id))) {
            res.status(400).json({
                message: "wrong parameter recieved!",
            });
            return;
        }
        await connectToDb();
        const project = await getOneProject(Number(id));
        // return if project not founded
        console.log(project);
        if (!project || typeof project === "undefined") {
            res.status(404).json({
                message: "project not founded!",
            });
            await disconnectFromDb();
            return;
        } else {
            res.status(200).json({
                message: "ok",
                data: project,
            });
            await disconnectFromDb();
            return project;
        }
    } catch (error) {
        console.log(error);
    }
};

export const createProject = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        const body = req.body;
        await connectToDb();

        const newProject = await addOneProject(body);
        console.log(newProject);
        await disconnectFromDb();
        return res.status(200).json({
            message: "new project added!",
            data: newProject,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateProject = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        let thumbnail
        let thumbnailUrl
        let video
        let videoUrl
        console.log(req.file.mimetype)
        if(req.file.mimetype.includes('image')) {
            thumbnail = req.file  ? req.file.originalname : ''
            thumbnailUrl = thumbnail ? `https://portfolio-storage.storage.iran.liara.space/${thumbnail}` : ""

        }
        if(req.file.mimetype.includes('video')) {
           video = req.file.originalname

           videoUrl = video ? `https://portfolio-storage.storage.iran.liara.space/${video}` : ""
        }

        const { id } = req.params;
        const body = req.body;
        await connectToDb();
        const updatedProject = await updateOneProject(Number(id), body, thumbnailUrl, videoUrl);
        console.log(updatedProject);
        await disconnectFromDb();
        return res.status(200).json({
            message: "project was updated!",
            data: updatedProject,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProject = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        const { id } = req.params;

        await connectToDb();
        const deletedProject = await deleteOneProject(Number(id));
        console.log(deletedProject);
        await disconnectFromDb();
        return res.status(200).json({
            message: "project was deleted!",
        });
    } catch (error) {
        console.log(error);
    }
};
