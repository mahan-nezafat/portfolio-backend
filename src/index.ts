import express from "express";
import "dotenv/config";
// import https from "https"
import morgan from "morgan";
import helmet from "helmet";
import blogsRouter from "./api/routes/blogs.router.js";
import projectsRouter from "./api/routes/projects.router.js";
import servicesRouter from "./api/routes/services.router.js";
import authRouter from "./api/routes/auth.router.js";
import panelRouter from "./api/routes/panel.router.js";
import { accessLogStream } from "./api/handlers/logs.handler.js";
// import swaggerJsDoc from 'swagger-jsdoc'
// import swaggerUi from 'swagger-ui'
// import {options}   from './api/swagger/options.js'
// import  SwaggerUI from "swagger-ui-express";

import cors from 'cors'
// import { readFileSync } from "fs";
const port = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined", {stream: accessLogStream}));
app.use(helmet());
app.use(cors())
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
// const specs = swaggerJsDoc(options)

// app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(specs))

// https.createServer({
//     cert: readFileSync("cert.fullchain.pem","utf-8"),
//     key: readFileSync("cert.privkey.pem", "utf-8")
// }, app)
app.listen(3000, () => console.log(`server running on port 3000`))

