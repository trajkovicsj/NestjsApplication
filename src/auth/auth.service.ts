import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserServiceService } from 'src/services/user-service/user-service.service';
import { jwtConstants } from './constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    
    constructor(private userService: UserServiceService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if(!user || !bcrypt.compareSync(password, user.password)) {
            throw new BadRequestException('invalid credentials')
        }
            const payload = {sub : user.idUser, email: user.email};
        return {
            payload,
            access_token: await this.jwtService.sign(payload, jwtConstants),
        }
    }
}
