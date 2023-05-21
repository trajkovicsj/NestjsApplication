export class User {
    
    constructor(public id: number,
        public email : string,
        public password : string,
        public created_at : Date,
        public updated_at: Date,
        public first_name: string,
        public last_name: string,){}
}