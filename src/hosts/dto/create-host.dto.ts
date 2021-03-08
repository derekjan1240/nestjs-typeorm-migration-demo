import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsPositive,
  IsBoolean,
  Length,
} from 'class-validator';

export class CreateHostDto {
  @IsBoolean({ message: '性別型態錯誤' })
  @IsNotEmpty({ message: '性別不得為空' })
  readonly gender: boolean;

  @IsString({ message: '姓名必須為字串' })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  readonly first_name: string;

  @IsString({ message: '姓名必須為字串' })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  readonly last_name: string;

  @IsNotEmpty({ message: '使用者姓名不得為空' })
  @Length(1, 20, { message: '姓名範圍錯誤' })
  readonly username: string;

  @IsInt({ message: '年齡必須為整數' })
  @IsPositive({ message: '年齡不得為負數' })
  @IsNotEmpty({ message: '年齡不得為空' })
  @Length(1, 200, { message: '年齡範圍錯誤' })
  readonly age: number;

  readonly avatar: string;

  @IsNotEmpty({ message: '地址不得為空' })
  readonly address: string;
}
