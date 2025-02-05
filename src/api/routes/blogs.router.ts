import express, { Response } from "express";
import {
    getBlogs,
    getBlog,
    getSortedBlogs,
    incUpvote,
} from "../controllers/blogs.controller";
import { blogsErrorMiddleware } from "../middlewares/errors.middleware";
const blogsRouter = express.Router();

blogsRouter.get("/", getBlogs);
blogsRouter.get("/sort/", blogsErrorMiddleware ,getSortedBlogs);
blogsRouter.put(`/upvote/inc`, incUpvote)
blogsRouter.get("/blog", getBlog);

export default blogsRouter;
