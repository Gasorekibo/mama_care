import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../location.entity/location.entity";

@Entity()
export class HealthcareFacility {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Location, {
    eager: true,
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
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
