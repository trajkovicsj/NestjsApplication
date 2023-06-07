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
            return this.taskRepository.query("SELECT idTodoItems, taskDescription, done FROM todo_items td WHERE td.User_idUser = " + id)
    }

    deleteTask(id: number) {
        return this.taskRepository.query('DELETE FROM todo_items td WHERE td.idTodoItems = ' + id)
    }
}
