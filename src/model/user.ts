import { TodoItems } from "./todo-items";

export interface User {
    id: number,
    email : string,
    password : string,
    created_at : Date,
    updated_at: Date,
    first_name: string,
    last_name: string,
}