import { Injectable } from '@nestjs/common';
import { tasks } from 'src/model/tasks';
import { TodoItems } from 'src/model/todo-items';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TaskService {

    private todoTasks = tasks;

    getTasks(): TodoItems[] {
        return this.todoTasks;
    }

    createTask(taskDescription: string, created_at: Date, updated_at: Date, done: boolean) {
        const taskId = uuidv4()
        const newTask = new TodoItems(taskId, taskDescription, created_at, updated_at, done);
        this.todoTasks.push(newTask)
        return taskId;
    }
}
