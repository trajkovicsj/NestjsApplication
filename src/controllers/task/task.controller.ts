import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
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
        await this.taskService.createTask(task);
        return response.status(HttpStatus.CREATED).json('Task successfully created')
    }

    @Delete('delete-task:id')
    async deleteTasks(@Res() response, @Param('id') id: number) {
        await this.taskService.deleteTask(id)
        return response.status(HttpStatus.OK).json('Task successfully deleted')
    }
}
