import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Blog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    
    @Column()
    status: string;
   
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
    @Column("simple-array")
    content: object[]
   
    @Column()
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

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}
