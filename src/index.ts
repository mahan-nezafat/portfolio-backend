import express from "express";
import "dotenv/config";
import https from "https"
import morgan from "morgan";
import helmet from "helmet";
import blogsRouter from "./api/routes/blogs.router";
import projectsRouter from "./api/routes/projects.router";
import servicesRouter from "./api/routes/services.router";
import authRouter from "./api/routes/auth.router";
import panelRouter from "./api/routes/panel.router";
import { accessLogStream } from "./api/handlers/logs.handler";
import path from "path";
import fs from 'fs'
const port = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined", {stream: accessLogStream}));
app.use(helmet());
const router = express.Router();
app.use("/", router);
app.use("/blogs", blogsRouter);
app.use("/projects", projectsRouter);
app.use("/services", servicesRouter);
app.use("/panel", panelRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("hello from https to you")
})


console.log(port)
https.createServer({
    cert: fs.readFileSync("cert.fullchain.pem","utf-8"),
    key: fs.readFileSync("cert.privkey.pem", "utf-8")
}, app).listen(3000, () => console.log(`server running on port 3000`, port))
// app.listen(3000, () => console.log(`server running on port 3000`));
