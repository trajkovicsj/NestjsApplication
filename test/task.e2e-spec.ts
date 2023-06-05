import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Users controler E2E test', () => {
    let app: INestApplication; //interface of application

    //setup applicaiton before every single test beforeEach, beforeAll to do it once
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()
        app = moduleFixture.createNestApplication();
        await app.init()
    });

    it('should create new task', () => {
        const CREATE_TASK_URL = '/task/add-task'
        return request(app.getHttpServer()).post(CREATE_TASK_URL).send({
            taskDescription: 'Ride a bike',
            created_at: new Date(),
            updated_at: new Date(),
            done: false,
            User_idUser: 6
        })
            .expect(201)
    });
    it('should delete task', () => {
        const id = 17
        return request(app.getHttpServer()).delete('/task/delete-task' + id).send({
        })
        .expect(200)
    })
});