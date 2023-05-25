import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class TodoItems {

    @PrimaryGeneratedColumn()
    idTodoItems: number

    @Column()
    taskDescription: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    done: boolean

    @ManyToOne(() => User, (User_idUser) => User_idUser.tasks)
    @JoinColumn({name: 'User_idUser'})
    User_idUser: User
}