import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [{
        provide: TaskService, 
        useValue: {
          createTasks: jest.fn(),
          userTasks: jest.fn(),
          getTasks: jest.fn()
        }
      }]
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
