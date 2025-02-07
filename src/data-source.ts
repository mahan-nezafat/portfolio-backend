import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Blog } from "./entities/Blog";
import { Comment } from "./entities/Comment";
import { Project } from "./entities/Project";
import { Service } from "./entities/Service";

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  process.env.DB_HOST,
    // process.env.IP,
    port: parseInt(process.env.DB_PORT),
    username:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: ['./src/entities/*.ts'],
    migrations: [],
    subscribers: [],

});

// AppDataSource.initialize()