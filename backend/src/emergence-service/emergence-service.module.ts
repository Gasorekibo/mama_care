import { Module } from '@nestjs/common';
import { EmergenceServiceService } from './emergence-service.service';
import { EmergenceServiceController } from './emergence-service.controller';
import { HealthFacilityService } from 'src/health-facility/health-facility.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyAlert } from 'src/dist/emergency_alerts.entity/emergency_alerts.entity';
import { HealthcareFacility } from 'src/dist/healthcare_facilities.entity/healthcare_facilities.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmergencyAlert]),
    TypeOrmModule.forFeature([HealthcareFacility]),
  ],
  controllers: [EmergenceServiceController],
  providers: [
    EmergenceServiceService,
    HealthFacilityService,
    CloudinaryService,
  ],
})
export class EmergenceServiceModule {}
