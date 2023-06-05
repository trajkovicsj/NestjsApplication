import { Body, Controller, Get, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard1 } from 'src/auth/auth.guard-admin';
import { User } from 'src/repositories/user.entity';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Controller('user-controller')
export default class UserControllerController {

    constructor(private readonly userService: UserServiceService) { }

    @Post('register')
    //@UseGuards(AuthGuard1)
    async createUser(@Res() response, @Body() user: User) {
        const findOne = await this.userService.findOne(user.email);
        if (findOne) {
            return response.status(HttpStatus.BAD_REQUEST).json('User alredy exists')
        }
        await this.userService.createUser(user);
        return response.status(HttpStatus.CREATED).json('Uses successfully created')
    }

    @Get('getUsers')
    async getUsers() {
        return this.userService.findAll();
    }

    @Get('numberOfUsers')
    userCounter() {
        return this.userService.userCounter();
    }

    @Get('numberOfUserTasks')
    taskCounter() {
        return this.userService.taskCounter();
    }

}