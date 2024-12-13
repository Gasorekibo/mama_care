import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from '../location.entity/location.entity';
import { EmergencyAlert } from '../emergency_alerts.entity/emergency_alerts.entity';

@Entity()
export class HealthcareFacility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @ManyToOne(() => Location, {
    eager: true,
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  location: Location;

  @Column('simple-array')
  servicesOffered: string[];

  @Column({ unique: true, nullable: false })
  contactNumber: string;

  @Column('boolean')
  emergencyAlerts: EmergencyAlert[];

  @Column({ unique: true, nullable: false })
  email: string;

  @Column('time')
  openingTime: string;

  @Column('time')
  closingTime: string;
  @Column({
    nullable: true,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MOvvaxkrLPSehZzvLBfMJM2Xk6UL1AVL8w&s',
  })
  profilePicture: string;
}
