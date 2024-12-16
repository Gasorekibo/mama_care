import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { HealthcareFacility } from 'src/dist/healthcare_facilities.entity/healthcare_facilities.entity';
import { HealthFacilityController } from './health-facility.controller';
import { HealthFacilityService } from './health-facility.service';

@Module({
  imports: [TypeOrmModule.forFeature([HealthcareFacility])],
  controllers: [HealthFacilityController],
  providers: [HealthFacilityService, CloudinaryService],
  exports: [HealthFacilityService],
})
export class HealthFacilityModule {}
