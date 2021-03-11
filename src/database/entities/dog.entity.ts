import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Host } from './host.entity';
import { Gender } from './enums/gender';

@Entity()
export class Dog extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: Gender;

  @Column({ type: 'tinyint', nullable: false, unsigned: true })
  age: number;

  @ManyToOne(() => Host, (host) => host.dogs, { eager: true })
  host: Host;
}
