import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/database.config';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { HealthFacilityModule } from './health-facility/health-facility.module';
import { EmergenceServiceModule } from './emergence-service/emergence-service.module';
import { PregnancyProfileModule } from './pregnancy-profile/pregnancy-profile.module';
import { HealthCheckupsModule } from './health-checkups/health-checkups.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { EducationContentModule } from './education-content/education-content.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    AuthenticationModule,
    UserModule,
    HealthFacilityModule,
    EmergenceServiceModule,
    PregnancyProfileModule,
    HealthCheckupsModule,
    CloudinaryModule,
    AuthorizationModule,
    EducationContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {}
  async onApplicationBootstrap() {
    if (this.dataSource.isInitialized) {
      console.log('Database connection initialized successfully');
    }
  }
}
