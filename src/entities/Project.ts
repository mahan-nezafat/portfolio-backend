import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    link: string;
    @Column()
    thumbnail_src: string;
    @Column()
    video_src: string;
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, (user) => user.projects)
    @JoinColumn({
        name: 'author_id'
    })
    user: User;
}
