import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()

export class Service {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user_id: number
    @Column()
    content: string
    @Column()
    price: number
}