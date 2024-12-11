import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { AppointmentType } from 'src/enums/appointment-type';
import { AppointmentStatus } from 'src/enums/appointment-status.enum';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn()
  healthWorker: User;

  @Column()
  healthWorkerId: string;

  @Column()
  start_date: Date;
  
  @Column()
  end: Date;

  @Column({
    type: 'enum',
    enum: AppointmentType,
  })
  type: AppointmentType;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  status: AppointmentStatus;

  @Column('text', { nullable: true })
  notes: string;
}
