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
  id: number;

  @ManyToOne(() => User, {
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

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

  @ManyToOne(
    () => HealthcareFacility,
    (healthcareFacility) => healthcareFacility.emergencyAlerts,
    {
      nullable: false,
      eager: false,
      cascade: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  assignedFacility: HealthcareFacility;
}
