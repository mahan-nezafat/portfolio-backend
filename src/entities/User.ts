import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment";
import { Project } from "./Project";
import { Blog } from "./Blog";
import { Service } from "./Service";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    first_name: string;

    @Column("varchar")
    last_name: string;

    @Column("int4")
    age: number;

    @Column("varchar")
    username: string;
    @Column("varchar")
    password: string;
    @Column("varchar")
    role: string;
    @Column("varchar")
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
