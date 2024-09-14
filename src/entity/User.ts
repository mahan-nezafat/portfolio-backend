import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

    @Column()
    username: string
    @Column()
    password: string
    @Column()
    role: string
    @Column()
    phone_number: string
    @Column()
    comments_id: Array<number>
    @Column()
    projects_id: Array<number>
}
