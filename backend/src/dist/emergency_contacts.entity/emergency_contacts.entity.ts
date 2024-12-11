import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class EmergencyContact {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  relationship: string;

  @Column()
  phoneNumber: string;

  @Column('boolean', { default: true })
  isEnabled: boolean;
}

