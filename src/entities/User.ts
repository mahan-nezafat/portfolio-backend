import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment";
import { Project } from "./Project";
import { Blog } from "./Blog";
import { Service } from "./Service";

@Entity()
export class User extends BaseEntity {
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
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date 
    
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];
    @OneToMany(() => Service, (service) => service.user)
    services: Service[];
    @OneToMany(() => Blog, (blog) => blog.user)
    blogs: Blog[];
}
