import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tasks } from 'src/model/tasks';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { User } from 'src/repositories/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TodoItems) private taskRepository: Repository<TodoItems>){}

    getTasks(): Promise<TodoItems[]> {
        return this.taskRepository.find({relations: ['User_idUser']});
    }

    createTask(user: User, task: TodoItems) {
        const newTask = this.taskRepository.create({
            ...task,
            User_idUser: user
        })
        this.taskRepository.save(newTask);
        return newTask;
    }
    
    // private todoTasks = tasks;

    // getTasks(): TodoItems[] {
    //     return this.todoTasks;
    // }

    // createTask(taskDescription: string, created_at: Date, updated_at: Date, done: boolean) {
    //     const taskId = uuidv4()
    //     const newTask = new TodoItems(taskId, taskDescription, created_at, updated_at, done);
    //     this.todoTasks.push(newTask)
    //     return taskId;
    // }
}
