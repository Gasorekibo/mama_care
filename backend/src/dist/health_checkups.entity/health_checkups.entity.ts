import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class HealthCheckup {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Column('float')
  weight: number;

  @Column('jsonb')
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };

  @Column('float', { nullable: true })
  hemoglobinLevel: number;

  @Column('text', { nullable: true })
  notes: string;

  @Column('simple-array', { nullable: true })
  recommendedActions: string[];

  @CreateDateColumn()
  date: Date;
}
