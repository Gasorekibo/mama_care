import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth-guard';
import { CurrentLoginUser } from 'src/authentication/decorator/get-loginUser';
import { LoginUser } from 'src/user/types/loginUserInterface';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post(':id')
  create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @Param('id', ParseIntPipe) id: number,
    @CurrentLoginUser() user: LoginUser,
  ) {
    return this.appointmentsService.create(createAppointmentDto, id, user);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.appointmentsService.findAllMyAppointments(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id);
  }
}
