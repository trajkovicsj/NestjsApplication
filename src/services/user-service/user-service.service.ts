import {Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/repositories/user.entity';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';


@Injectable()
export class UserServiceService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    findAll(): Promise<User[]> {
        return this.userRepository.find({relations: ['tasks']});
    }

    findOne(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({email});
    }

    createUser(user: User): Promise<User> {
        const password = encodePassword(user.password)
        console.log(password)
        const newUser = this.userRepository.create({ ...user, password})
        return this.userRepository.save(newUser);
    }

    userCounter() {
        return this.userRepository.count();
    }

    taskCounter() {
        return this.userRepository.query("SELECT idUser, first_name, COUNT(idTodoItems) as tasks FROM user u LEFT JOIN todo_items t ON u.idUser = t.User_idUser GROUP BY u.idUser ")
    }

    deleteUser(id: number) {
        return this.userRepository.query('DELETE FROM user u WHERE u.idUser = ' + id)
    }
}


