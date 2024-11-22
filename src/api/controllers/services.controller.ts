import { IService } from "../../repository/services/interface.services";
import {
    addOneService,
    deleteOneService,
    getAllServices,
    getOneService,
    updateOneService,
} from "../../repository/services/repository.services";
import { connectToDb, disconnectFromDb } from "../handlers/adapter";
import { Request, Response } from "express";

export const getServices = async (
    req: Request,
    res: Response
): Promise<Array<IService>> => {
    try {
        await connectToDb();
        const projects = await getAllServices();
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

export const getService = async (
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

        const service = await getOneService(Number(id));

        if (!service || typeof service === "undefined") {
            res.status(404).json({
                message: "project not founded!",
            });
            await disconnectFromDb();
            return;
        }

        res.status(200).json({
            message: "ok",
            data: service,
        });

        await disconnectFromDb();
        return service;
    } catch (error) {
        console.log(error);
    }
};

export const createService = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        const body = req.body;
        await connectToDb();

        const newService = await addOneService(body);
        console.log(newService);
        await disconnectFromDb();
        return res.status(200).json({
            message: "new service added!",
            data: newService,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateService = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        let thumbnail
        let thumbnailUrl
        console.log(req.file.mimetype)
        if(req.file.mimetype.includes('image')) {
            thumbnail = req.file  ? req.file.originalname : ''
            thumbnailUrl = thumbnail ? `https://portfolio-storage.storage.iran.liara.space/${thumbnail}` : ""

        }
        const { id } = req.params;
        const body = req.body;
        await connectToDb();
        const updatedService = await updateOneService(Number(id), body, thumbnailUrl);
        console.log(updatedService);
        await disconnectFromDb();
        return res.status(200).json({
            message: "service was updated!",
            data: updatedService,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteService = async (
    req: Request,
    res: Response
): Promise<object> => {
    try {
        const { id } = req.params;

        await connectToDb();
        const deletedService = await deleteOneService(Number(id));
        console.log(deletedService);
        await disconnectFromDb();
        return res.status(200).json({
            message: "service was deleted!",
        });
    } catch (error) {
        console.log(error);
    }
};
