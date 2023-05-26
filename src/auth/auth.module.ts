import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/modules/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants'
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule,
    JwtModule.register({
      global:true,
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    })
  ],
  providers:[AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
