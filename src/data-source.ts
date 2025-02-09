import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Blog } from "./entities/Blog";
import { Comment } from "./entities/Comment";
import { Project } from "./entities/Project";
import { Service } from "./entities/Service";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    // process.env.IP,
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: ['./src/entities/*.ts'],
    migrations: [],
    subscribers: [],
});

// AppDataSource.initialize()