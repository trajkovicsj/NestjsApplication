export class TodoItems {
    constructor(public taskId: string,
        public taskDescription: string,
        public created_at: Date,
        public updated_at: Date,
        public done: boolean,){}  
}