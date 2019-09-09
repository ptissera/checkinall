import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>){}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
     const users:User[] = await this.userRepository.find({id});
     if (users.length === 1) {
       return users[0];
     }
     return null;
  }

  async getUserByEmail(email: string): Promise<User> {
    const users:User[] = await this.userRepository.find({email});
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.displayName = user.displayName;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.isAdmin = user.isAdmin;
    newUser.image = user.image;    
    return await this.userRepository.save(newUser);
  }

  async updateUser(id: number, user: CreateUserDto): Promise<any> {
    const newUser = new User();
    newUser.id = id;    
    newUser.displayName = user.displayName;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.isAdmin = user.isAdmin;
    newUser.image = user.image;    
    return await this.userRepository.update(id, newUser);
  }
}
