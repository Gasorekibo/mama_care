import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dist/user/user.entity';
import { Repository } from 'typeorm';
import { UserAuthDto } from '../dto/userAuthDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Partial<User> | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...userWithNoPassword } = user;
      return userWithNoPassword;
    }
    return null;
  }

  async login(user: User): Promise<{
    user: User | null;
    access_token: string;
    refresh_token: string;
  }> {
    const payload = { email: user.email, sub: { id: user.id } };
    return {
      user,
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: '2d',
      }),
    };
  }

  async register(createUserDto: UserAuthDto): Promise<User> {
    try {
      const user = await this.userRepository.create(createUserDto);
      user.password = await bcrypt.hash(user.password, 10);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async refreshTokens(user: User) {
    const payload = { email: user.email, sub: { id: user.id } };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
