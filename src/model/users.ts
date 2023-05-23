import { User } from "./user";

export const users : User[] = [{
    id: 1,
    email: 'user1@example.com',
    password: '123456',
    created_at: new Date('2023-05-16'),
    updated_at: new Date('2023-05-20'),
    first_name: 'Sandra',
    last_name: 'Trajkovic',
    tasks : [{
        taskId : '1',
        taskDescription: "Go fishing",
        created_at: new Date("2023-05-23"),
        updated_at: new Date("2023-05-23"),
        done: false
}],
}, 
{
    id: 2,
    email: 'user2@example.com',
    password: '123456',
    created_at: new Date('2023-05-17'),
    updated_at: new Date('2023-05-21'),
    first_name: 'Natalija',
    last_name: 'Trajkovic',
    tasks : [{
        taskId : '2',
        taskDescription: "Go shopping",
        created_at: new Date("2023-05-23"),
        updated_at: new Date("2023-05-23"),
        done: false
}]
},]