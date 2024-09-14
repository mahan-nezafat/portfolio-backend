import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()

export class Comment {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    date: Date
    @Column()
    author: string
    @Column()
    content: string
    @Column()
    parent_id: number

}