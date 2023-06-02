import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TodoItems) private taskRepository: Repository<TodoItems>){}

    getTasks(): Promise<TodoItems[]> {
        return this.taskRepository.find({relations: ['User_idUser']});
    }

    createTask(task: TodoItems) {
        return this.taskRepository.save(task);
    }

    getUserTasks(id: number): Promise<TodoItems[]> {
            return this.taskRepository.query("SELECT taskDescription, done FROM todo_items td WHERE td.User_idUser = " + id)
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
