import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { TaskService } from 'src/controllers/task/task.service';
import { request } from 'https';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get('get-tasks')
    async getTasks(){
        return this.taskService.getTasks()
    }

    @Post('add-task')
    async createTasks(@Res() response, @Body()task: TodoItems){
        const newTask = await this.taskService.createTask(task);
        return response.status(HttpStatus.CREATED).json({
            newTask
        })
    }

    // @Get('get-tasks')
    // getTasks() {
    //     return this.taskService.getTasks();
    // }

    // @Post('add-task')
    // createTask(@Body('taskDescription') taskDescription: string, @Body('created_at') created_at: Date,
    //     @Body('updated_at') updated_at: Date,  @Body('done') done: boolean) {
    //     this.taskService.createTask(taskDescription, created_at, updated_at, done);
    //     return {
    //         msg: "Task successfully added",
    //     };
    //  }
}
