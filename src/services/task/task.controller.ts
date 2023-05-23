import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from 'src/services/task/task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get('get-tasks')
    getTasks() {
        return this.taskService.getTasks();
    }

    @Post('add-task')
    createTask(@Body('taskDescription') taskDescription: string, @Body('created_at') created_at: Date,
        @Body('updated_at') updated_at: Date,  @Body('done') done: boolean) {
        this.taskService.createTask(taskDescription, created_at, updated_at, done);
        return {
            msg: "Task successfully added",
        };
     }
}
