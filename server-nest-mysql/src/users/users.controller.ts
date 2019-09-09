import { Controller, Get, Put, Param, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UserService) {}
  
  @Get(':id')
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Get(':email')
  getUserByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }

  @Get('')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Post('')
  async createUser(@Body() user: CreateUserDto) {
    try {
    const userid = await this.userService.createUser(user);
    } catch (err) {
        console.log('error en save user', err);
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id, @Body() user: CreateUserDto) {
    try {
    const userid = await this.userService.updateUser(id, user);
    } catch (err) {
        console.log('error en save user', err);
    }
  }
}
