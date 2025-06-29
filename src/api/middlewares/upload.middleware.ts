import { NextFunction, Request, Response } from "express";
import {upload} from '../../../s3/storage.handler.js'

export const uploadThumbnailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const data = upload.single("thumbnail")
    console.log(data, req.files)
}