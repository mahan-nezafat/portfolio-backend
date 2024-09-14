import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()

export class Comment {
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

}