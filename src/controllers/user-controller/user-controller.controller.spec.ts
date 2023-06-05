import { Test, TestingModule } from '@nestjs/testing';
import { response } from 'express';
import UserControllerController from 'src/controllers/user-controller/user-controller.controller';
import { UserServiceService } from 'src/services/user-service/user-service.service';

describe('UserControllerController', () => {
  let controller: UserControllerController;
  let service: UserServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserControllerController],
      providers: [{
        provide: UserServiceService,
        useValue: {
          createUser: jest.fn(),
          findOne: jest.fn(),
          findAll: jest.fn(),
        }
      }],
    }).compile();

    controller = module.get<UserControllerController>(UserControllerController);
    service = module.get<UserServiceService>(UserServiceService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
