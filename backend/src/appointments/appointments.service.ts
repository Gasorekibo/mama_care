import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/dist/appointments.entity/appointments.entity';
import { Repository } from 'typeorm';
import { LoginUser } from 'src/user/types/loginUserInterface';
import * as dayjs from 'dayjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    private readonly userService: UserService,
  ) {}
  async create(
    createAppointmentDto: CreateAppointmentDto,
    id: number,
    user: LoginUser,
  ): Promise<Appointment> {
    try {
      if (
        dayjs(createAppointmentDto.start_date).isAfter(
          dayjs(createAppointmentDto.end_date),
        )
      ) {
        throw new BadRequestException('Start date must be before end date');
      }
      if (user.sub.id === +id) {
        throw new BadRequestException(
          'You cannot create an appointment with yourself',
        );
      }
      const healthWorker = await this.userService.getUser(id);
      const owner = await this.userService.getUser(user.sub.id);
      const allAppointments = await this.appointmentRepository.find();
      const appointmentsOfThisHealthCareWorker = allAppointments.filter(
        (appointment) => {
          return appointment.healthWorker.id === id;
        },
      );
      const isThereAnyAppointment = appointmentsOfThisHealthCareWorker.some(
        (appointment) =>
          dayjs(createAppointmentDto.start_date).isSame(
            dayjs(appointment.start_date),
          ) ||
          dayjs(createAppointmentDto.end_date).isSame(
            dayjs(appointment.end_date),
          ) ||
          (dayjs(createAppointmentDto.start_date).isAfter(
            dayjs(appointment.start_date),
          ) &&
            dayjs(createAppointmentDto.start_date).isBefore(
              dayjs(appointment.end_date),
            )) ||
          (dayjs(createAppointmentDto.end_date).isAfter(
            dayjs(appointment.start_date),
          ) &&
            dayjs(createAppointmentDto.end_date).isBefore(
              dayjs(appointment.end_date),
            )),
      );
      if (isThereAnyAppointment) {
        throw new ConflictException(
          'This health worker has an appointment at this time',
        );
      }

      const appointment = this.appointmentRepository.create({
        ...createAppointmentDto,
        healthWorker,
        owner,
      });
      await this.appointmentRepository.save(appointment);
      return appointment;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      } else if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Something went wrong');
      }
    }
  }

  async findAll() {
    try {
      return await this.appointmentRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findAllMyAppointments(id: number): Promise<Appointment[]> {
    try {
      const appointments = await this.appointmentRepository.find();
      const healthWorkerAppointments = appointments?.filter(
        (appointment) => appointment.healthWorker.id === +id,
      );

      if (healthWorkerAppointments.length === 0) {
        throw new NotFoundException('healthWorkerAppointments not found');
      }
      return healthWorkerAppointments;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Error while fetching appointment',
      );
    }
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
