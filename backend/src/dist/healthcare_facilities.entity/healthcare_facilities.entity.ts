import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../location.entity/location.entity";

@Entity()
export class HealthcareFacility {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column('simple-array')
  servicesOffered: string[];

  @Column()
  contactNumber: string;

  @Column('boolean')
  hasEmergencyServices: boolean;

  @Column('time')
  openingTime: string;

  @Column('time')
  closingTime: string;
}
