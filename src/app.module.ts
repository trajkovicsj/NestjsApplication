import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import UserControllerController from './user/user-controller/user-controller.controller';
import { UserServiceService } from './services/user-service/user-service.service';
import { HttpModule } from "@nestjs/axios";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskService } from './services/task/task.service';
import { TaskController } from "./services/task/task.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./repositories/user.entity";
import { TodoItems } from "./repositories/todoItems.entity";
import { DataSource } from "typeorm";

@Module({
    imports: [HttpModule, AuthModule, UserModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Sandra99.',
        database: 'mydb',
        entities: [User, TodoItems],
        synchronize: true,
    })],
    controllers: [AppController, UserControllerController, TaskController],
    providers: [AppService, UserServiceService, AuthService, TaskService],
    
})
export class AppModule {

constructor(private dataSource: DataSource){}
}