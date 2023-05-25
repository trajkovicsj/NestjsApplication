import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { User } from 'src/repositories/user.entity';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Module({

    imports: [TypeOrmModule.forFeature([User, TodoItems])],
    providers: [UserServiceService],
    exports: [UserServiceService, TypeOrmModule],
})
export class UserModule {}
