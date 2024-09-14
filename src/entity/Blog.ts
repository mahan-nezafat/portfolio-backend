import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity
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
    category;
    @Column()
    readtime;
    @Column()
    date;
    @Column()
    summary;
    @Column()
    content;
    @Column()
    comments_id;
    @Column()
    language;
}
