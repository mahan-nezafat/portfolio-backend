import express, { Response } from "express";
import {
    getBlogs,
    getBlog,
    getSortedBlogs,
    // incUpvote,
    // incViews,
} from "../controllers/blogs.controller";
const blogsRouter = express.Router();

blogsRouter.get("/", getBlogs);
blogsRouter.get("/sort/", getSortedBlogs);
blogsRouter.get("/:id", getBlog);
// blogsRouter.put(`/inc/view/:id`, incViews)
// blogsRouter.put(`/inc/upvote/:id`, incUpvote)

export default blogsRouter;
