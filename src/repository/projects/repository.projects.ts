import { Project } from "../../entities/Project.js";
import { getOneUser } from "../users/repository.users.js";
// import { IProject } from "./interface.projects";

// get all projects

export const getAllProjects = async (): Promise<object> => {
    try {
        const projects = await Project.find({});
        return projects;
    } catch (error) {
        console.log(error);
    }
};
// get one project by id
export const getOneProject = async (id: number): Promise<object> => {
    try {
        const project = await Project.findOne({ where: { id } });
        return project;
    } catch (error) {
        console.log(error);
    }
};
// add one project
export const addOneProject = async (projectPayLoad: {
    authorId: number;
    name: string;
    tech: string;
    link: string;
    backgroundColor: string
    thumbnailSrc: string
    videoSrc: string
    previewSrc: string
    content: object[]
}): Promise<object> => {
    try {
        const user = await getOneUser({id: projectPayLoad.authorId});
        const newProject = await Project.save({
            name: projectPayLoad.name,
            link: projectPayLoad.link,
            tech: projectPayLoad.tech,
            background_color: projectPayLoad.backgroundColor,
            thumbnail_src: projectPayLoad.thumbnailSrc,
            video_src: projectPayLoad.videoSrc,
            preview_src: projectPayLoad.previewSrc,
            content: projectPayLoad.content,
            user,
        });
        return newProject;
    } catch (error) {
        console.log(error);
    }
};
// update one project by id
export const updateOneProject = async (
    id: number,
    updatedData: {
        name?: string;
        description?: string;
        linkUrl?: string;
    },
    thumbnailFile?: string,
    videoFile?: string
): Promise<object> => {
    try {
        const updatedProject = await Project.update(id, {
            name: updatedData.name,
            description: updatedData.description,
            thumbnail_src: thumbnailFile,
            video_src: videoFile,
            link: updatedData.linkUrl,
        });
        return updatedProject;
    } catch (error) {
        console.log(error);
    }
};
// delete one project by id
export const deleteOneProject = async (id: number): Promise<object> => {
    try {
        const deletedProject = await Project.delete(id);
        return deletedProject;
    } catch (error) {
        console.log(error);
    }
};
