import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Comment } from "./Comment.js";
import { Project } from "./Project.js";
import { Blog } from "./Blog.js";
import { Service } from "./Service.js";
import { role } from "../repository/users/interface.users.js";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    first_name: string;

    @Column("varchar")
    last_name: string;

    @Column({
        type: "int",
        nullable: true
    })
    age: number;
    @Column({
        type: "varchar",
        nullable: true
    })
    avatarSrc: string
    @Column({
        type: "varchar",
        nullable: true
    })
    username: string;
   
    
    @Column({
        type: "varchar",
        nullable: false
    })
    role: role;
    @Column({
        type: "int",
        nullable: true
    })
    otp: number
    @Column({
        type: "varchar",
        nullable: true
    })
    email: string
    @Column({
        type: "varchar",
        nullable: false
    })
    phone_number: string;
    @Column({
        type: "varchar",
        nullable: true
    })
    request: string
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];
    @OneToMany(() => Service, (service) => service.user)
    services: Service[];
    @OneToMany(() => Blog, (blog) => blog.user)
    blogs: Blog[];
}
