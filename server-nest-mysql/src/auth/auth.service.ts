import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { SignInDto } from './dto/signin.dto';
import { UserService } from './../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
    private userService: UserService) {}

  async createToken(signin: SignInDto) {    
    const userDB = await this.userService.getUserByEmail(signin.email);
    if (userDB.password === signin.password) {
      const user: JwtPayload = signin;
      const accessToken = this.jwtService.sign(user);
      return {
        id: userDB.id,
        displayName: userDB.displayName,
        isAdmin: userDB.isAdmin,
        image: userDB.image,
        token: accessToken,
      };
    } else {
      throw new UnauthorizedException();
    }

    
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
