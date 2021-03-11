import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsUUID,
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

export class DogDto {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString({ message: '姓名型態錯誤' })
  @IsNotEmpty({ message: '姓名不得為空' })
  @Length(1, 10, { message: '姓名長度需要小於十' })
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

  public static from(dto: Partial<DogDto>) {
    const it = new DogDto();
    it.id = dto.id;
    it.name = dto.name;
    it.age = dto.age;
    it.gender = dto.gender;
    return it;
  }

  public static fromEntity(entity: Dog) {
    return this.from({
      id: entity.id,
      name: entity.name,
      age: entity.age,
      gender: entity.gender,
    });
  }

  public toEntity(user: User = null) {
    const it = new Dog();
    it.id = this.id;
    it.name = this.name;
    it.gender = this.gender;
    it.age = this.age;
    it.createDateTime = new Date();
    it.createdBy = user ? user.id : 'guest';
    it.lastChangedBy = user ? user.id : 'guest';
    return it;
  }
}
