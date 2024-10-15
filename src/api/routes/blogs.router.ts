import express, { Response } from "express";
import {
    getBlogs,
    getBlog,
    getSortedBlogs,
    incUpvote,
} from "../controllers/blogs.controller";
const blogsRouter = express.Router();

blogsRouter.get("/", getBlogs);
blogsRouter.get("/sort/", getSortedBlogs);
blogsRouter.put(`/upvote/inc`, incUpvote)
blogsRouter.get("/blog", getBlog);

export default blogsRouter;
