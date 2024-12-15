import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dist/user/user.entity';
import { HealthCheckupsService } from 'src/health-checkups/health-checkups.service';
import { HealthCheckup } from 'src/dist/health_checkups.entity/health_checkups.entity';
import { HealthCheckupsModule } from 'src/health-checkups/health-checkups.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => HealthCheckupsModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
