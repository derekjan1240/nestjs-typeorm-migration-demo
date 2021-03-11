import {
  Controller,
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
    const dog = CreateDogDto.from(dto);
    return this.dogsService.create(dog, user);
  }

  @Get()
  public async findAll(): Promise<DogDto[]> {
    return await this.dogsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<DogDto> {
    return await this.dogsService.findOne(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdateDogDto,
    @User() user: UserEntity,
  ): Promise<UpdateDogDto> {
    const dog = UpdateDogDto.from(dto);
    return this.dogsService.update(id, dog, user);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<DogDto> {
    return await this.dogsService.remove(id);
  }
}
