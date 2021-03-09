import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from 'src/database/entities/dog.entity';
import { User } from 'src/database/entities/user.entity';
import { DogDto } from './dto/dog.dto';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
  ) {}

  public async create(dto: CreateDogDto, user: User): Promise<DogDto> {
    return this.dogRepository
      .save(dto.toEntity(user))
      .then((e) => DogDto.fromEntity(e));
  }

  public async findAll(): Promise<DogDto[]> {
    return await this.dogRepository
      .find()
      .then((dogs) => dogs.map((e) => DogDto.fromEntity(e)));
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
