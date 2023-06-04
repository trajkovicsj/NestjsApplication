import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import UserControllerController from 'src/controllers/user-controller/user-controller.controller';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { User } from 'src/repositories/user.entity';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Module({

    controllers: [UserControllerController],
    imports: [TypeOrmModule.forFeature([User, TodoItems]), AuthModule],
    providers: [UserServiceService],
    exports: [UserServiceService, TypeOrmModule],
})
export class UserModule {}
