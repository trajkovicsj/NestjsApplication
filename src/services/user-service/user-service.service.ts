import { Injectable } from '@nestjs/common'; 
import { TodoItems } from 'src/model/todo-items';
import { User } from 'src/model/user';
import { users } from 'src/model/users';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UserServiceService {

    private usersInfo = users;
    private 

    getUsers(): User[] {
        return this.usersInfo;
    }

    findOne(email: string) {
       return this.usersInfo.find(user => user.email === email);
    }

    createUser(email: string, password: string, created_at: Date, updated_at: Date, first_name: string, last_name: string, tasks: Array<TodoItems>) {
        const id = uuidv4()
        const newUser = new User(id, email, password, created_at, updated_at, first_name, last_name, tasks);
        this.usersInfo.push(newUser)
        return id;
    }

    userCounter() {
        let counter = 0;
        for(let i = 0; i < this.usersInfo.length; i++) {
            counter++;
        }
        return counter;
    }

    taskCounter() {
        let usersTasks : {name: string, numberOfTasks: number} [] = []
        for (let i = 0; i < this.usersInfo.length; i++) {
            let counter = 0;
            for (let j = 0; j < this.usersInfo[i].userTasks.length; j++) {
                counter++; 
            }
            let numberOfTasks = counter;
            let name = this.usersInfo[i].first_name;
            usersTasks.push({name, numberOfTasks});
            
        }      
            return usersTasks;
    }
}


