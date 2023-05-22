import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from 'src/model/user';
import { users } from 'src/model/users';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UserServiceService {

    private usersInfo = users;

    getUsers(): User[] {
        return this.usersInfo;
    }

    findOne(email: string) {
       return this.usersInfo.find(user => user.email === email);
    }

    createUser(email: string, password: string, created_at: Date, updated_at: Date, first_name: string, last_name: string) {
        const id = uuidv4()
        const newUser = new User(id, email, password, created_at, updated_at, first_name, last_name);
        this.usersInfo.push(newUser)
        return id;
    }


    // async login(email: string, pass: string) {
    //     const user = await this.validateUser(email, pass);

    //     if (!user) {
    //        throw new UnauthorizedException
    //     }
    //     return user;
    // }

}


