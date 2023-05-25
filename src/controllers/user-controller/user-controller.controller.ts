import { Body, Controller, Get, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { tasks } from 'src/model/tasks';
import { TodoItems } from 'src/model/todo-items';
import { User } from 'src/repositories/user.entity';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Controller('user-controller')
export default class UserControllerController {

    constructor(private readonly userService: UserServiceService)  {}

    @Post()
    @UseGuards(AuthGuard)
    async createUser(@Res() response, @Body() user: User) {
        const newUser = await this.userService.createUser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Get('getUsers')
    async getUsers(@Res() response) {
        const users = await this.userService.getUsers();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get(':email')
    async findOne(@Res() response, @Param('email') email: string) {
        const user = await this.userService.findOne(email)
        return response.status(HttpStatus.OK).json({
            user
        })
    }


    // @Get('getUsers')
    // getUsers() : User[] {
    //     return this.userService.getUsers();
    // }

    // @Get('numberOfUsers')
    // userCounter() {
    //     const usersNumber = this.userService.userCounter();
    //     return {
    //         msg: 'Number of users',
    //         usersNumber,
    //     }
    //  }

    //  @Get('numberOfUserTasks')
    //  taskCounter(){
    //     const numberOfUserTasks = this.userService.taskCounter();
    //     return {
    //         msg: 'Number of tasks',
    //         numberOfUserTasks
    //     }
    //  }

    //  @Post()
    //  @UseGuards(AuthGuard)
    //  createUser(@Body('email') email: string, @Body('password') password: string, @Body('created_at') created_at: Date,
    //     @Body('updated_at') updated_at: Date,  @Body('first_name') first_name: string,
    //     @Body('last_name') last_name: string, @Body('tasks') tasks: Array<TodoItems>) {
    //     this.userService.createUser(email, password, created_at, updated_at, first_name, last_name, tasks);
    //     return {
    //         msg: "User successfully added",
    //     };
    //  }
  
    // @Get(':email')
    // findOne(@Param('email') email: string) {
    //      this.userService.findOne(email);
    // }  
}

