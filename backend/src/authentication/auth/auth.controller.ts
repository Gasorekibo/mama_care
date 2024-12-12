import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/dist/user/user.entity';
import { UserAuthDto } from '../dto/userAuthDto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { RefreshTokenGuard } from '../guards/refreshToken-guard';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: UserAuthDto): Promise<User | string> {
    return this.authService.register(createUserDto);
  }
  @UseGuards(RefreshTokenGuard)
  @Post('refresh-token')
  async refreshTokens(@Request() req) {
    return this.authService.refreshTokens(req.user);
  }
}
