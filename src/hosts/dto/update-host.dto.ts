import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsInt,
  IsPositive,
  IsEnum,
  Length,
  Min,
  Max,
} from 'class-validator';
import { Gender } from 'src/database/entities/enums/gender';
import { Host } from 'src/database/entities/host.entity';
import { User } from 'src/database/entities/user.entity';

export class UpdateHostDto {
  @ApiProperty({ required: true })
  @IsEnum(Gender, { message: '性別型態錯誤' })
  @IsOptional()
  gender: Gender;

  @ApiProperty({ required: false })
  @IsString({ message: '姓名必須為字串' })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  @IsOptional()
  first_name: string;

  @ApiProperty({ required: false })
  @IsString({ message: '姓名必須為字串' })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  @IsOptional()
  last_name: string;

  @ApiProperty({ required: true })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  @IsOptional()
  username: string;

  @ApiProperty({ required: false })
  @Min(1, { message: '年齡最小為 1 歲' })
  @Max(200, { message: '年齡最大為 200 歲' })
  @IsPositive({ message: '年齡不得為負數' })
  @IsInt({ message: '年齡必須為整數' })
  @IsOptional()
  age: number;

  @ApiProperty({ required: true })
  @IsOptional()
  address: string;

  public static from(dto: Partial<UpdateHostDto>) {
    const it = new UpdateHostDto();
    it.gender = dto.gender;
    it.username = dto.username;
    it.first_name = dto.first_name;
    it.last_name = dto.last_name;
    it.age = dto.age;
    it.address = dto.address;
    return it;
  }

  public static fromEntity(entity: Host) {
    return this.from({
      gender: entity.gender,
      username: entity.username,
      first_name: entity.first_name,
      last_name: entity.last_name,
      age: entity.age,
      address: entity.address,
    });
  }

  public toEntity(user: User = null) {
    const it = new Host();
    it.gender = this.gender;
    it.username = this.username;
    it.first_name = this.first_name;
    it.last_name = this.last_name;
    it.age = this.age;
    it.address = this.address;
    it.lastChangedBy = user ? user.id : 'guest';
    it.lastChangedDateTime = new Date();
    return it;
  }
}
