import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Host extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: boolean;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  age: number;

  @Column()
  avatar: string;

  @Column()
  address: string;
}
