import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    content: string;
    @Column("int4")
    price: number;
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @ManyToOne(() => User, (user) => user.services)
    @JoinColumn({
        name: 'author_id'
    })
    user: User;
}
