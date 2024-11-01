import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import blogsRouter from "./api/routes/blogs.router";
import projectsRouter from "./api/routes/projects.router";
import servicesRouter from "./api/routes/services.router";
import authRouter from "./api/routes/auth.router";
import panelRouter from "./api/routes/panel.router";

const port = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
const router = express.Router();
app.use("/", router);
app.use("/blogs", blogsRouter);
app.use("/projects", projectsRouter);
app.use("/services", servicesRouter);
app.use("/panel", panelRouter);
app.use("/auth", authRouter);

app.listen(3000, () => console.log(`server running on port 3000`));
