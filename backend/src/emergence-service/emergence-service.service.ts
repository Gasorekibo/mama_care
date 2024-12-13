import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmergenceServiceDto } from './dto/create-emergence-service.dto';
import { UpdateEmergenceServiceDto } from './dto/update-emergence-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmergencyAlert } from 'src/dist/emergency_alerts.entity/emergency_alerts.entity';
import { Repository } from 'typeorm';
import { User } from 'src/dist/user/user.entity';
import { HealthFacilityService } from 'src/health-facility/health-facility.service';
import e from 'express';
import { LoginUser } from 'src/user/types/loginUserInterface';

@Injectable()
export class EmergenceServiceService {
  constructor(
    @InjectRepository(EmergencyAlert)
    private emergencyAlertRepository: Repository<EmergencyAlert>,
    private readonly healthFacilityService: HealthFacilityService,
  ) {}
  async create(
    user: LoginUser,
    createEmergenceServiceDto: CreateEmergenceServiceDto,
  ): Promise<EmergencyAlert> {
    try {
      const assignedFacility = await this.healthFacilityService.findOne(
        createEmergenceServiceDto.assignedFacilityId,
      );
      const { sub } = user;
      const objectToSave = {
        ...createEmergenceServiceDto,
        user: sub,
        assignedFacility,
      };
      const emergence =
        await this.emergencyAlertRepository.create(objectToSave);

      await this.emergencyAlertRepository.save(emergence);

      return emergence;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(): Promise<EmergencyAlert[]> {
    return await this.emergencyAlertRepository.find();
  }

  async findOne(id: number): Promise<EmergencyAlert> {
    try {
      const emergenceAlert = await this.emergencyAlertRepository.findOneBy({ id });
      if (!emergenceAlert) {
        throw new NotFoundException('No emergence alert found');
      }
      return emergenceAlert;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  update(id: number, updateEmergenceServiceDto: UpdateEmergenceServiceDto) {
    return `This action updates a #${id} emergenceService`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergenceService`;
  }
}
