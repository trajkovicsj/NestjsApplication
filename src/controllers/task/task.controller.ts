import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { TaskService } from 'src/controllers/task/task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }


    @Get('userTasks:id')
    async userTasks(@Param('id') id: number) {
        return this.taskService.getUserTasks(id)
    }

    @Get('get-tasks')
    async getTasks() {
        return this.taskService.getTasks()
    }

    @Post('add-task')
    async createTasks(@Res() response, @Body() task: TodoItems) {
        const newTask = await this.taskService.createTask(task);
        return response.status(HttpStatus.CREATED).json('Task successfully created')
    }
    // @Get('userTasks')
    // async userTasks() {
    //     return this.taskService.getUserTasks()
    // }

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
