import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import UserControllerController from './user/user-controller/user-controller.controller';
import { UserServiceService } from './services/user-service/user-service.service';
import { HttpModule } from "@nestjs/axios";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [HttpModule, AuthModule, UserModule],
    controllers: [AppController, UserControllerController],
    providers: [AppService, UserServiceService, AuthService],
    
})
export class AppModule {

}