import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PregnancyProfile } from "../pregnancy-profile.entity/pregnancy-profile.entity";
import { RiskLevel } from "src/enums/risk-level.enum";

@Entity()
export class HealthRecommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PregnancyProfile)
  @JoinColumn()
  pregnancyProfile: PregnancyProfile;

  @Column()
  pregnancyProfileId: string;

  @Column('text')
  recommendation: string;

  @Column({
    type: 'enum',
    enum: RiskLevel,
  })
  riskLevel: RiskLevel;

  @CreateDateColumn()
  createdAt: Date;
}
