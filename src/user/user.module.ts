import { Module } from '@nestjs/common';
import { UserServiceService } from 'src/services/user-service/user-service.service';

@Module({

    providers: [UserServiceService],
    exports: [UserServiceService],
})
export class UserModule {}
