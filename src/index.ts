import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import blogsRouter from "./api/routes/blogs.router";
import projectsRouter from "./api/routes/projects.router";
import servicesRouter from "./api/routes/services.router";
import authRouter from "./api/routes/auth.router";
import panelRouter from "./api/routes/panel.router";
import { addOneBlog, deleteOneBlog, getAllBlogs, getOneBlog, getRecentBlogs, incrementUpvotes, incrementViews, updateOneBlog } from "./repository/blogs/repository.blogs";
import { connectToDb } from "./api/handlers/adapter";
import { status } from "./repository/blogs/interface.blogs";
import { addOneComment, getOneComment } from "./repository/comments/repository.comments";
import { addOneProject, deleteOneProject, getAllProjects, getOneProject, updateOneProject } from "./repository/projects/repository.projects";

const port = process.env.PORT;

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use("/", router);
app.use("blogs", blogsRouter);
app.use("projects", projectsRouter);
app.use("services", servicesRouter);
app.use("panel", panelRouter);
app.use("auth", authRouter);

// connectToDb()
const start = async () => {
    await connectToDb();
    const result = await deleteOneProject(1)
   

   console.log(result)

};

start();

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "response ok",
    });
});

app.listen(port, () => console.log(`server running on port ${port}`));
