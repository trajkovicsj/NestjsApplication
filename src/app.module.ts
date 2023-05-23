import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import UserControllerController from './user/user-controller/user-controller.controller';
import { UserServiceService } from './services/user-service/user-service.service';
import { HttpModule } from "@nestjs/axios";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
    imports: [HttpModule, AuthModule, UserModule],
    controllers: [AppController, UserControllerController, TaskController],
    providers: [AppService, UserServiceService, AuthService, TaskService],
    
})
export class AppModule {

}