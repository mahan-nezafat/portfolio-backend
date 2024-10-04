import { Project } from "../../entities/Project";
import { getOneUser } from "../users/repository.users";
import { IProject } from "./interface.projects";

export const getAllProjects = async (): Promise<object> => {
    try {
        const projects = await Project.find({});
        return projects;
    } catch (error) {
        console.log(error);
    }
};

export const getOneProject = async (id: number): Promise<object> => {
    try {
        const project = await Project.findBy({ id });
        return project;
    } catch (error) {
        console.log(error);
    }
};

export const addOneProject = async (
    authorId: number,
    projectPayLoad: {
        name: string;
        description: string;
        thumbnailSrc: string;
        videoSrc: string;
        linkUrl: string;
    }
): Promise<object> => {
    try {
        const user = await getOneUser(authorId);
        const newProject = await Project.save({
            name: projectPayLoad.name,
            description: projectPayLoad.description,
            thumbnail_src: projectPayLoad.thumbnailSrc,
            video_src: projectPayLoad.videoSrc,
            link: projectPayLoad.linkUrl,
            user,
        });
        return newProject;
    } catch (error) {
        console.log(error);
    }
};

export const updateOneProject = async (
    id: number,
    updatedData: {
        name?: string;
        description?: string;
        thumbnailSrc?: string;
        videoSrc?: string;
        linkUrl?: string;
    }
): Promise<object> => {
    try {
        const updatedProject = await Project.update(id, {
            name: updatedData.name,
            description: updatedData.description,
            thumbnail_src: updatedData.thumbnailSrc,
            video_src: updatedData.videoSrc,
            link: updatedData.linkUrl,
            
        })
        return updatedProject
    } catch (error) {
        console.log(error);
    }
};

export const deleteOneProject = async (id: number): Promise<object> => {
    try {
        const deletedProject = await Project.delete(id);
        return deletedProject
    } catch (error) {
        console.log(error);
    }
};
