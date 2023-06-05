import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

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

    describe('create new user POST /user-controller/register', () => {
        const CREATE_USER_URL = '/user-controller/register'
        it('should create new user', () => {
            return request(app.getHttpServer()).post(CREATE_USER_URL).send({
                email: "user12@example.com",
                password: "123456",
                created_at: new Date(),
                updated_at: new Date(),
                first_name: "Andrija",
                last_name: "Nikolic",
                tasks: []
            })
                .expect(201)
        });
        it('should return 400 when invalid email', () => {
            return request(app.getHttpServer()).post(CREATE_USER_URL).send({
                email: "user10@example.com",
                password: "123456",
                created_at: new Date(),
                updated_at: new Date(),
                first_name: "Sara",
                last_name: "Stojanovic",
                tasks: []
            })
            .expect(400)
        })
    })
});