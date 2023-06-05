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

    describe('Authentication', () => {
        const URL = '/auth/login';
        it('should login', () => {
            return request(app.getHttpServer()).post(URL).send({
                email: "user1@example.com",
                password: "123456"
            })
            .expect(200)
        })
    })
});