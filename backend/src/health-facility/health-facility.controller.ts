import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
import { CreateHealthFacilityDto } from './dto/create-health-facility.dto';
import { UpdateHealthFacilityDto } from './dto/update-health-facility.dto';

@Controller('api/v1/facility')
export class HealthFacilityController {
  constructor(private readonly healthFacilityService: HealthFacilityService) {}

  @Post()
  create(@Body() createHealthFacilityDto: CreateHealthFacilityDto) {
    return this.healthFacilityService.create(createHealthFacilityDto);
  }

  @Get()
  findAll() {
    return this.healthFacilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthFacilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthFacilityDto: UpdateHealthFacilityDto) {
    return this.healthFacilityService.update(+id, updateHealthFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthFacilityService.remove(+id);
  }
}
