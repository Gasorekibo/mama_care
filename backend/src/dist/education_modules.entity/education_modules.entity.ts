import { EducationModuleType } from "src/enums/education-module-type.enum";
import { RiskLevel } from "src/enums/risk-level.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EducationModule {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('int')
  trimester: number;

  @Column({
    type: 'enum',
    enum: EducationModuleType,
  })
  type: EducationModuleType;

  @Column({ nullable: true })
  videoUrl: string;

  @Column({
    type: 'enum',
    enum: RiskLevel,
    nullable: true,
  })
  recommendedForRiskLevel: RiskLevel;
}
