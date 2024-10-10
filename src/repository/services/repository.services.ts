import { Service } from "../../entities/Service";
import { getOneUser } from "../users/repository.users";
import { IService } from "./interface.services";

// get all services

export const getAllServices = async (): Promise<object> => {
    try {
        const services = await Service.find({});
        return services;
    } catch (error) {
        console.log(error);
    }
};
// get one service by id
export const getOneService = async (id: number): Promise<object> => {
    try {
        const service = await Service.findBy({ id });
        return service;
    } catch (error) {
        console.log(error);
    }
};
// add one service
export const addOneService = async (
    authorId: number,
    servicePayLoad: {
        name: string,
        thumbnailSrc: string,
        content: object[],
        price: number,
    }
): Promise<object> => {
    try {
        const user = await getOneUser(authorId);
        const newService = await Service.save({
            name: servicePayLoad.name,
            thumbnail_src: servicePayLoad.thumbnailSrc,
            content: servicePayLoad.content,
            price: servicePayLoad.price,
            user,
        });
        return newService;
    } catch (error) {
        console.log(error);
    }
};
// update one service by id 
export const updateOneService = async (
    id: number,
    updatedData: {
        name?: string,
        thumbnailSrc?: string,
        content?: object[],
        price?: number,
    }
): Promise<object> => {
    try {
        const updatedService = await Service.update(id, {
            name: updatedData.name,
            thumbnail_src: updatedData.thumbnailSrc,
            content: updatedData.content,
            price: updatedData.price,
        });
        return updatedService;
    } catch (error) {
        console.log(error);
    }
};
// delete one service by id
export const deleteOneService = async (id: number): Promise<object> => {
    try {
        const deletedService = await Service.delete(id);
        return deletedService;
    } catch (error) {
        console.log(error);
    }
};
