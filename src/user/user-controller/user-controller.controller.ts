import { Body, Controller,Get, Param, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { request } from 'http';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/model/user';
import { users } from 'src/model/users';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Controller('user-controller')
export class UserControllerController {

    constructor(private readonly userService: UserServiceService) {
    }

    @Get('getUsers')
    getUsers() : User[] {
        return this.userService.getUsers();     
    }
  

    @Get(':email')
    findOne(@Param('email') email: string) {
         this.userService.findOne(email);
    }
    
     @Post()
     @UseGuards(AuthGuard)
     createUser(@Body('email') email: string, @Body('password') password: string, @Body('created_at') created_at: Date,
        @Body('updated_at') updated_at: Date,  @Body('first_name') first_name: string,  @Body('last_name') last_name: string) {
        this.userService.createUser(email, password, created_at, updated_at, first_name, last_name);
        return {
            msg: "User succesfully added",
        };
     }

    //  @Post('login')
    //  login(@Body('email') email: string, @Body('password') password: string) {
    //     this.userService.login(email, password);
    //     return {
    //         email,
    //         msg: "Succesfully!"
    //     }
    //  }

}

