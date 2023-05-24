import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tasks } from 'src/model/tasks';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TodoItems) private itemsRepository: Repository<TodoItems>){}

    getTasks(): Promise<TodoItems[]> {
        return this.itemsRepository.find();
    }

    createTask(task: TodoItems): Promise<TodoItems> {
        return this.itemsRepository.save(task);
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
