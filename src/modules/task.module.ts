import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItems } from 'src/repositories/todoItems.entity';
import { TaskService } from 'src/controllers/task/task.service';

@Module({

    imports: [TypeOrmModule.forFeature([TodoItems])],
    providers: [TaskService],
    exports: [TaskService, TypeOrmModule],
})
export class TaskModule {}
