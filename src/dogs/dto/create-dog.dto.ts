import { IsNotEmpty, IsString, IsBoolean, Length } from 'class-validator';

export class CreateDogDto {
  @IsString({ message: '姓名型態錯誤' })
  @IsNotEmpty({ message: '姓名不得為空' })
  @Length(1, 10, { message: '姓名長度需要小於十' })
  readonly name: string;

  @IsBoolean({ message: '性別型態錯誤' })
  @IsNotEmpty({ message: '性別不得為空' })
  readonly gender: boolean;
}
