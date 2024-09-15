import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()

export class Comment {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    date: Date
    @ManyToOne(() => User, (author) => author.comments)
    author: User

    @Column()
    content: string
    @Column()
    parent_id: number

}