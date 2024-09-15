import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @ManyToOne(() => User, (author) => author.blogs)
    author: User
    @Column()
    status: string;
    @Column()
    date: Date;
    @Column()
    thumbnail: string;
   
    @Column()
    upvote: number;
    @Column()
    views: number;
    @Column()
    category: string;
    @Column()
    readtime: number;
    @Column()
    author_summary: string;
    @Column()
    content: Array<object>;
    @Column()
    comments_id: number;
    @Column()
    language: string;
}
