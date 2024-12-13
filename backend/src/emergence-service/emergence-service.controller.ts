import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { EmergenceServiceService } from './emergence-service.service';
import { CreateEmergenceServiceDto } from './dto/create-emergence-service.dto';
import { UpdateEmergenceServiceDto } from './dto/update-emergence-service.dto';
import { CurrentLoginUser } from 'src/authentication/decorator/get-loginUser';
import { User } from 'src/dist/user/user.entity';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth-guard';
import { LoginUser } from 'src/user/types/loginUserInterface';

@Controller('api/v1/emergence-alert')
@UseGuards(JwtAuthGuard)
export class EmergenceServiceController {
  constructor(
    private readonly emergenceServiceService: EmergenceServiceService,
  ) {}

  @Post()
  async create(
    @CurrentLoginUser() user: LoginUser,
    @Body() createEmergenceServiceDto: CreateEmergenceServiceDto,
  ) {
    return await this.emergenceServiceService.create(
      user,
      createEmergenceServiceDto,
    );
  }

  @Get()
  findAll() {
    return this.emergenceServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.emergenceServiceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmergenceServiceDto: UpdateEmergenceServiceDto,
  ) {
    return this.emergenceServiceService.update(+id, updateEmergenceServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emergenceServiceService.remove(+id);
  }
}
