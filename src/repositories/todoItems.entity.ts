import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class TodoItems {

    @PrimaryGeneratedColumn()
    taskId: number

    @Column()
    taskDescription: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    done: boolean

    @ManyToOne(() => User, (User_idUser) => User_idUser.tasks)
    public User_idUser: User
}