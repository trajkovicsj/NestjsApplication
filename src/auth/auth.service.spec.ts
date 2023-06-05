import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserServiceService } from 'src/services/user-service/user-service.service';
import { Repository } from 'typeorm';
import { User } from 'src/repositories/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserServiceService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, {
        provide: UserServiceService,
        useValue: {
          validateUser: jest.fn()
        }
      }],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserServiceService>(UserServiceService)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('user service should be defined', () => {
    expect(userService).toBeDefined();
  });
});
