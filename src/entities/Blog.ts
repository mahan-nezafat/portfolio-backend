import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";
import { status } from "../repository/blogs/interface.blogs";

@Entity()
export class Blog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar")
    title: string;
    
    @Column("varchar")
    status: status;
   
    @Column("varchar")
    thumbnail: string;
   
    @Column("int4")
    upvote: number;
    @Column("int4")
    views: number;
    @Column("varchar")
    category: string;
    @Column("int4")
    readtime: number;
    @Column("varchar")
    author_summary: string;

    @Column({
        type: 'jsonb',
        nullable: true
    })
    content: object[]
   
    @Column("varchar")
    language: string;
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @ManyToOne(() => User, (user) => user.blogs)
    @JoinColumn({
        name: 'author_id'
    })
    user: User

    @OneToMany(() => Comment, (comment) => comment.blog)
    comments: Comment[];
}
