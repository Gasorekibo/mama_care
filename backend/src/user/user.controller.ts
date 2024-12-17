import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CurrentLoginUser } from 'src/authentication/decorator/get-loginUser';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth-guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  //@UseGuards(JwtAuthGuard)
  @Get()
  findAll(@CurrentLoginUser() user) {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Patch('profile/:id')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.updateProfilePicture(id, file);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
