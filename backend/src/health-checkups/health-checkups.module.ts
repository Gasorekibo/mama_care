import { Module } from '@nestjs/common';
import { HealthCheckupsService } from './health-checkups.service';
import { HealthCheckupsController } from './health-checkups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckup } from 'src/dist/health_checkups.entity/health_checkups.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/dist/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HealthCheckup, User]),
  ],
  controllers: [HealthCheckupsController],
  providers: [HealthCheckupsService, UserService],
})
export class HealthCheckupsModule {}
