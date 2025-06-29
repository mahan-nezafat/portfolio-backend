import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    Relation,
} from "typeorm";
import { User } from "./User.js";

@Entity()
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar")
    name: string
    @Column({type: "varchar", nullable: true})
    thumbnail_src: string
    @Column({
        type: "jsonb",
        nullable: true,
    })
    content: object[];

    @Column("int")
    price: number;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @ManyToOne(() => User, (user) => user.services)
    @JoinColumn({
        name: "author_id",
    })
    user: Relation<User>;
}
