import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HealthCheckupsService } from './health-checkups.service';
import { CreateHealthCheckupDto } from './dto/create-health-checkup.dto';
import { UpdateHealthCheckupDto } from './dto/update-health-checkup.dto';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/health-checkups')
export class HealthCheckupsController {
  constructor(private readonly healthCheckupsService: HealthCheckupsService) {}

  @Post()
  create(@Body() createHealthCheckupDto: CreateHealthCheckupDto) {
    return this.healthCheckupsService.create(createHealthCheckupDto);
  }

  @Get()
  findAll() {
    return this.healthCheckupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthCheckupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthCheckupDto: UpdateHealthCheckupDto,
  ) {
    return this.healthCheckupsService.update(+id, updateHealthCheckupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthCheckupsService.remove(+id);
  }
}
