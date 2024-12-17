import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrentLoginUser } from 'src/authentication/decorator/get-loginUser';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth-guard';
import { LoginUser } from 'src/user/types/loginUserInterface';
import { CreateEmergenceServiceDto } from './dto/create-emergence-service.dto';
import { UpdateEmergenceServiceDto } from './dto/update-emergence-service.dto';
import { EmergenceServiceService } from './emergence-service.service';

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
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmergenceServiceDto: UpdateEmergenceServiceDto,
  ) {
    return this.emergenceServiceService.update(+id, updateEmergenceServiceDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.emergenceServiceService.remove(id);
  }
}
