import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Gender } from './enums/gender';

@Entity()
export class Host extends BaseEntity {
  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  first_name: string;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  last_name: string;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  username: string;

  @Column({ type: 'tinyint', nullable: false })
  age: number;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  address: string;
}
