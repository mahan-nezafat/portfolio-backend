import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { Project } from "./Project";
import { Blog } from "./Blog";
import { Service } from "./Service";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    age: number;

    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    role: string;
    @Column()
    phone_number: string;
    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[];

    @OneToMany(() => Project, (project) => project.author)
    projects: Project[];
    @OneToMany(() => Service, (service) => service.author)
    services: Service[];
    @OneToMany(() => Blog, (blog) => blog.author)
    blogs: Blog[];
}
