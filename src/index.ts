import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import { AppDataSource } from "./data-source";
import { User } from "./entities/User";
import { Blog } from "./entities/Blog";
import { Comment } from "./entities/Comment";
import { DataSource } from "typeorm";
import blogsRouter from "./api/routes/blogs.router";
import projectsRouter from "./api/routes/projects.router";
import servicesRouter from "./api/routes/services.router";
const port = process.env.PORT;

const app = express();
const router = express.Router()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use('/', router)
app.use('/blogs', blogsRouter)
app.use('/projects', projectsRouter)
app.use('/services', servicesRouter)
// app.use('/panel', panelRouter)
// app.use('/auth', authRouter)



const saveBlog = async () => {
    await AppDataSource.initialize()
    
};

saveBlog()

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "response ok",
    });
});

app.listen(port, () => console.log(`server running on port ${port}`));
