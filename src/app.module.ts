import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import UserControllerController from "./controllers/user-controller/user-controller.controller";
import { TaskModule } from "./modules/task.module";
import { UserModule } from "./modules/user.module";
import { TaskController } from "./controllers/task/task.controller";
import { TaskService } from "./controllers/task/task.service";
import { UserServiceService } from "./services/user-service/user-service.service";
import { User } from "./repositories/user.entity";
import { TodoItems } from "./repositories/todoItems.entity";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/constants";


@Module({
    imports: [HttpModule, AuthModule, UserModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Sandra99.',
        database: 'mydb',
        entities: [User, TodoItems],
    }), TaskModule, JwtModule.register({
        global:true,
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '1d'}
      })],
    controllers: [AppController, UserControllerController, TaskController],
    providers: [AppService, UserServiceService, AuthService, TaskService],
    
})
export class AppModule {

constructor(private dataSource: DataSource){}
}