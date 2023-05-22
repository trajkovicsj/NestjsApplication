import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserControllerController } from './user/user-controller/user-controller.controller';
import { UserServiceService } from './services/user-service/user-service.service';
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [AppController, UserControllerController],
    providers: [AppService, UserServiceService],
    
})
export class AppModule {

}