import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Injectable()
export class AuthService {
    
    constructor(private userService: UserServiceService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && user.password !== password) {
          throw new UnauthorizedException();
        }
        const payload = {userId : user.id, email: user.email};
        return {
            payload,
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}