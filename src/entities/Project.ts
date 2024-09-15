import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()

export class Project {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    link: string
    @Column()
    thumbnail_src: string
    @Column()
    video_src: string
    @ManyToOne(() => User, (author) => author.projects)
    author: User
}