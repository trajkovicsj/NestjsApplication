import { Test, TestingModule } from '@nestjs/testing';
import { UserServiceService } from './user-service.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/repositories/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'src/utils/bcrypt'
import  bcrypt1  from 'bcrypt';

describe('UserServiceService', () => {
  let service: UserServiceService
  let userRepository: Repository<User>
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServiceService, {
        provide: USER_REPOSITORY_TOKEN,
        useValue: {
          create: jest.fn(),
          save: jest.fn(),
          findOne: jest.fn()
        }
      }],
    }).compile();

    service = module.get<UserServiceService>(UserServiceService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('user repository should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  describe('createUser', () => {
    jest.spyOn(bcrypt, 'encodePassword').mockReturnValue('hashed')
    it('should encoded password correctly', async () => {
      await service.createUser({
        idUser: 1,
        email: "user1@example.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date(),
        first_name: "Sandra",
        last_name: "Trajkovic",
        tasks: []
      });
      expect(bcrypt.encodePassword).toBeCalledWith('123456');
    });
    it('should call userRepository.create with correct params', async () => {
      await service.createUser({
        idUser: 1,
        email: "user1@example.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date(),
        first_name: "Sandra",
        last_name: "Trajkovic",
        tasks: []
      });
      expect(userRepository.create).toHaveBeenCalledWith({
        idUser: 1,
        email: "user1@example.com",
        password: "hashed",
        created_at: new Date(),
        updated_at: new Date(),
        first_name: "Sandra",
        last_name: "Trajkovic",
        tasks: []
      });
    });
  })
});
