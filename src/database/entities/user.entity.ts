import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;
}
