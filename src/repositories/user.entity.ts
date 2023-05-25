import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodoItems } from "./todoItems.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUser : number;

    @Column()
    email: string;

    @Column()
    password: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    first_name: string

    @Column()
    last_name: string

    @OneToMany(() => TodoItems, task => task.User_idUser, { cascade: ['insert', 'update'] })
    tasks: TodoItems[];

}