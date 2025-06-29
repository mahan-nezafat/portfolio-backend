import express, { Response } from "express";
import {
    getBlogs,
    getBlog,
    getSortedBlogs,
    incUpvote,
} from "../controllers/blogs.controller.js";
import { blogsErrorMiddleware } from "../middlewares/errors.middleware.js";
const blogsRouter = express.Router();

blogsRouter.get("/", getBlogs);
blogsRouter.get("/sort/", blogsErrorMiddleware ,getSortedBlogs);
blogsRouter.put(`/upvote/inc`, incUpvote)
blogsRouter.get("/blog", getBlog);

export default blogsRouter;
