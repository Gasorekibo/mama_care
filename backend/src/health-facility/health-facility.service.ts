import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateHealthFacilityDto } from './dto/create-health-facility.dto';
import { UpdateHealthFacilityDto } from './dto/update-health-facility.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthcareFacility } from 'src/dist/healthcare_facilities.entity/healthcare_facilities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthFacilityService {
  constructor(
    @InjectRepository(HealthcareFacility)
    private healthFacilityRepository: Repository<HealthcareFacility>,
  ) {}
  create(
    createHealthFacilityDto: CreateHealthFacilityDto,
  ): Promise<HealthcareFacility> {
    try {
      const facility = this.healthFacilityRepository.create(
        createHealthFacilityDto,
      );
      return this.healthFacilityRepository.save(facility);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Facility already exists');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return this.healthFacilityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} healthFacility`;
  }

  update(id: number, updateHealthFacilityDto: UpdateHealthFacilityDto) {
    return `This action updates a #${id} healthFacility`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthFacility`;
  }
}
