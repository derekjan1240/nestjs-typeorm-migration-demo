import {
  Controller,
  UsePipes,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogDto } from './dto/dog.dto';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { User } from '../common/decorators/user.decorator';
import { User as UserEntity } from 'src/database/entities/user.entity';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  public async create(
    @Body() dto: CreateDogDto,
    @User() user: UserEntity,
  ): Promise<CreateDogDto> {
    const dog = DogDto.from(dto);
    return this.dogsService.create(dog, user);
  }

  @Get()
  public async findAll(): Promise<CreateDogDto[]> {
    return await this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
