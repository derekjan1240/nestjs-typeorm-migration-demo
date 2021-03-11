import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from 'src/database/entities/dog.entity';
import { Host } from 'src/database/entities/host.entity';
import { User } from 'src/database/entities/user.entity';
import { DogDto } from './dto/dog.dto';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
    @InjectRepository(Host)
    private readonly hostRepository: Repository<Host>,
  ) {}

  public async create(dto: CreateDogDto, user: User): Promise<CreateDogDto> {
    const host = await this.hostRepository.findOne(dto.hostId);
    return this.dogRepository
      .save(dto.toEntity(host, user))
      .then((e) => CreateDogDto.fromEntity(e));
  }

  public async findAll(): Promise<DogDto[]> {
    return await this.dogRepository
      .find()
      .then((dogs) => dogs.map((e) => DogDto.fromEntity(e)));
  }

  public async findOne(id: string): Promise<DogDto> {
    const dog = await this.dogRepository.findOne(id);
    if (!dog) {
      throw new Error(`The dog with id: ${id} does not exist!`);
    }
    return DogDto.fromEntity(dog);
  }

  public async update(
    id: string,
    dto: UpdateDogDto,
    user: User,
  ): Promise<UpdateDogDto> {
    const dog = await this.dogRepository.findOne(id);
    if (!dog) {
      throw new Error(`The dog with id: ${id} does not exist!`);
    }
    Object.assign(dog, dto.toEntity(user));
    return this.dogRepository.save(dog).then((e) => UpdateDogDto.fromEntity(e));
  }

  public async remove(id: string): Promise<DogDto> {
    const dog = await this.dogRepository.findOne(id);
    if (!dog) {
      throw new Error(`The dog with id: ${id} does not exist!`);
    }
    return this.dogRepository.remove(dog).then((e) => DogDto.fromEntity(e));
  }
}
