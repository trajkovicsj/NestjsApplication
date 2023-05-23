import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/model/user';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Controller('user-controller')
export default class UserControllerController {

    constructor(private readonly userService: UserServiceService) {}

    @Get('getUsers')
    getUsers() : User[] {
        return this.userService.getUsers();
    }

    @Get('numberOfUsers')
    userCounter() {
        const usersNumber = this.userService.userCounter();
        return {
            msg: 'Number of users',
            usersNumber,
        }
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
            msg: "User successfully added",
        };
     }
}

