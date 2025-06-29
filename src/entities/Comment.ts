import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn, Relation } from "typeorm";
import { User } from "./User.js";
import { Blog } from "./Blog.js";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar")
    content: string;
    // @Column()
    // parent_id: number 
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({
        name: 'author_id'
    })
    user: Relation<User>;
    @ManyToOne(() => Blog, (blog) => blog.comments)
    @JoinColumn({
        name: 'blog_id'
    })
    blog: Relation<Blog>;

}
