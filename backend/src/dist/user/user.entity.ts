import { IsEmail, IsPhoneNumber } from "class-validator";
import { UserRole } from "src/enums/user-role.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PregnancyProfile } from "../pregnancy-profile.entity/pregnancy-profile.entity";
import { HealthCheckup } from "../health_checkups.entity/health_checkups.entity";
import { Appointment } from "../appointments.entity/appointments.entity";
import { EmergencyContact } from "../emergency_contacts.entity/emergency_contacts.entity";
import { Location } from "../location.entity/location.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  full_name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsPhoneNumber()
  phoneNumber: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PREGNANT_WOMAN,
  })
  role: UserRole;

  @Column({ nullable: true })
  profileImageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships
  @OneToOne(() => PregnancyProfile, (profile) => profile.user)
  pregnancyProfile: PregnancyProfile;

  @OneToMany(() => HealthCheckup, (checkup) => checkup.user)
  healthCheckups: HealthCheckup[];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(() => EmergencyContact, (contact) => contact.user)
  emergencyContacts: EmergencyContact[];

  @ManyToOne(() => Location)
  @JoinColumn()
  location: Location;
}
