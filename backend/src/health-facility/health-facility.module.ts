import { Module } from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
import { HealthFacilityController } from './health-facility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcareFacility } from 'src/dist/healthcare_facilities.entity/healthcare_facilities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthcareFacility])],
  controllers: [HealthFacilityController],
  providers: [HealthFacilityService],
  exports: [HealthFacilityService],
})
export class HealthFacilityModule {}
