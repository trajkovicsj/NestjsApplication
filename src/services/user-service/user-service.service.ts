import {Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/repositories/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserServiceService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    getUsers(): Promise<User[]> {
        return this.userRepository.find({relations: ['tasks']});
    }

    findOne(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({email})
    }

    createUser(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    userCounter() {
        return this.userRepository.count();
    }

    taskCounter() {
        return this.userRepository.query("SELECT idUser, first_name, COUNT(idTodoItems) as tasks FROM user u LEFT JOIN todo_items t ON u.idUser = t.User_idUser GROUP BY u.idUser ")
    }
}
    // async createUserTask(id: number, task: TodoItems): Promise<TodoItems> {
    //     const user = await this.userRepository.findOneBy({id});
    //     if (!user) {
    //         throw new HttpException('User not found', HttpStatus.BAD_REQUEST)   
    //     }
    //     const newTask = this.taskRepository.create({...task, user,});
    //     const saveTask = this.taskRepository.save(newTask)
    //     return
    

    //private usersInfo = users;
    // getUsers(): User[] {
    //     return this.usersInfo;
    // }

    // findOne(email: string) {
    //    return this.usersInfo.find(user => user.email === email);
    // }

    // createUser(email: string, password: string, created_at: Date, updated_at: Date, first_name: string, last_name: string, tasks: Array<TodoItems>) {
    //     const id = uuidv4()
    //     const newUser = new User(id, email, password, created_at, updated_at, first_name, last_name, tasks);
    //     this.usersInfo.push(newUser)
    //     return id;
    // }

    // userCounter() {
    //     let counter = 0;
    //     for(let i = 0; i < this.usersInfo.length; i++) {
    //         counter++;
    //     }
    //     return counter;
    // }

    // taskCounter() {
    //     let usersTasks : {name: string, numberOfTasks: number} [] = []
    //     for (let i = 0; i < this.usersInfo.length; i++) {
    //         let counter = 0;
    //         for (let j = 0; j < this.usersInfo[i].userTasks.length; j++) {
    //             counter++; 
    //         }
    //         let numberOfTasks = counter;
    //         let name = this.usersInfo[i].first_name;
    //         usersTasks.push({name, numberOfTasks});
            
    //     }      
    //         return usersTasks;
    // }


