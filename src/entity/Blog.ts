import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    user_id: number;
    @Column()
    status: string;
    @Column()
    date: Date;
    @Column()
    thumbnail: string;
    @Column()
    author: string;
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
