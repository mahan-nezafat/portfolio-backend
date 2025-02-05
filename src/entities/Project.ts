import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar")
    name: string;
    @Column("varchar")
    description: string; 
    @Column("varchar")
    link: string;
    @Column({type:"varchar", nullable: true})
    thumbnail_src: string;
    @Column({type:"varchar", nullable: true})
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
