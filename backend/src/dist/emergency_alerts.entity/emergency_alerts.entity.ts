import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { HealthcareFacility } from '../healthcare_facilities.entity/healthcare_facilities.entity';

@Entity()
export class EmergencyAlert {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Column('jsonb')
  location: {
    latitude: number;
    longitude: number;
  };

  @Column('text')
  emergencyType: string;

  @Column('boolean', { default: false })
  isResolved: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => HealthcareFacility, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  assignedFacility: HealthcareFacility;
}
