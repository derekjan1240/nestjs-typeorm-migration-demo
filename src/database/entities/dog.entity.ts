import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Gender } from './enums/gender';

@Entity()
export class Dog extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: Gender;
}
