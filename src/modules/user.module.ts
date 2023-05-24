import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/repositories/user.entity';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Module({

    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserServiceService],
    exports: [UserServiceService, TypeOrmModule],
})
export class UserModule {}
