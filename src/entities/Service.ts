import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()

export class Service {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, (author) => author.services)
    author: User
    @Column()
    content: string
    @Column()
    price: number
}