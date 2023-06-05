import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/repositories/user.entity';

describe('TaskService', () => {
  let service: TaskService;
  let taskRepository: Repository<TodoItems>
  const TASK_REPOSITORY_TOKEN = getRepositoryToken(TodoItems)

  const user = {
    idUser: 1,
    email: "user1@example.com",
    password: "hashed",
    created_at: new Date("2023-06-05T09:41:47.877Z"),
    updated_at: new Date("2023-06-05T09:41:47.877Z"),
    first_name: "Sandra",
    last_name: "Trajkovic",
    tasks: []
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, {
        provide: TASK_REPOSITORY_TOKEN,
        useValue: {
          create: jest.fn(),
          save: jest.fn(),
          findAll: jest.fn(),
          query: jest.fn()
        }
      }],
    }).compile();

    service = module.get<TaskService>(TaskService);
    taskRepository = module.get<Repository<TodoItems>>(TASK_REPOSITORY_TOKEN)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('task repository should be defined', () => {
    expect(taskRepository).toBeDefined();
  });
  describe('createTask', () => {
    it('should create user task', async () => {
      await service.createTask({
        idTodoItems: 1,
        taskDescription: 'Go on vacation',
        created_at: new Date("2023-06-05T09:41:47.877Z"),
        updated_at: new Date("2023-06-05T09:41:47.877Z"),
        done: false,
        User_idUser: user
      })
    })
  })
  describe('deleteTask', () => {
    it('should delete task', async () => {
      await service.deleteTask(1)
    })
  })
});
