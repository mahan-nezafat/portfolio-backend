import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import blogsRouter from "./api/routes/blogs.router";
import projectsRouter from "./api/routes/projects.router";
import servicesRouter from "./api/routes/services.router";
import authRouter from "./api/routes/auth.router";
import panelRouter from "./api/routes/panel.router";
import { addOneBlog, deleteOneBlog, getAllBlogs, getOneBlog, getRecentBlogs, incrementUpvotes, incrementViews, updateOneBlog } from "./repository/blogs/blogs.repository";
import { connectToDb } from "./api/handlers/adapter";
import { status } from "./repository/blogs/interface.blogs";

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
    // await getAllBlogs();
    await incrementViews(11)
    // const result = await updateOneBlog(11, {
    //     title: "how to advertise cheaply and effectively?",
    //     status: status.published,
    //     category: "marketing",
    //     readtime: 360,
    //     language: "en",
    //     content: [
    //         {
    //             header: "how to advertise cheaply and effectively?"
    //         },
    //         {
    //             paragraph: "one of the cheap strategies of marketing is seo"
    //         }
    //     ]
    // })
    // await deleteOneBlog(12)
    // console.log(result)
    // await getRecentBlogs();
};

start();

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "response ok",
    });
});

app.listen(port, () => console.log(`server running on port ${port}`));
