import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsEnum,
  IsPositive,
  Length,
  Min,
  Max,
} from 'class-validator';
import { Gender } from 'src/database/entities/enums/gender';
import { Dog } from 'src/database/entities/dog.entity';
import { User } from 'src/database/entities/user.entity';
import { Host } from 'src/database/entities/host.entity';

export class CreateDogDto {
  @ApiProperty({ required: true })
  @Length(1, 10, { message: '姓名長度需要小於十' })
  @IsString({ message: '姓名型態錯誤' })
  @IsNotEmpty({ message: '姓名不得為空' })
  name: string;

  @ApiProperty({ required: true })
  @IsEnum(Gender, { message: '性別型態錯誤' })
  @IsNotEmpty({ message: '性別不得為空' })
  gender: Gender;

  @ApiProperty({ required: true })
  @Min(1, { message: '年齡最小為 1 歲' })
  @Max(200, { message: '年齡最大為 200 歲' })
  @IsPositive({ message: '年齡不得為負數' })
  @IsInt({ message: '年齡必須為整數' })
  @IsNotEmpty({ message: '年齡不得為空' })
  age: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: '飼主不得為空' })
  hostId: string;

  public static from(dto: Partial<CreateDogDto>) {
    const it = new CreateDogDto();
    it.name = dto.name;
    it.age = dto.age;
    return it;
  }

  public static fromEntity(entity: Dog) {
    return this.from({
      name: entity.name,
      age: entity.age,
      gender: entity.gender,
    });
  }

  public toEntity(host: Host = null, user: User = null) {
    const it = new Dog();
    it.name = this.name;
    it.gender = this.gender;
    it.age = this.age;
    it.host = host;
    it.createDateTime = new Date();
    it.createdBy = user ? user.id : 'guest';
    it.lastChangedBy = user ? user.id : 'guest';
    return it;
  }
}
