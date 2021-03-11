import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Host } from 'src/database/entities/host.entity';
import { User } from 'src/database/entities/user.entity';
import { HostDto } from './dto/host.dto';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';

@Injectable()
export class HostsService {
  constructor(
    @InjectRepository(Host)
    private readonly hostRepository: Repository<Host>,
  ) {}

  public async create(dto: CreateHostDto, user: User): Promise<CreateHostDto> {
    return this.hostRepository
      .save(dto.toEntity(user))
      .then((e) => CreateHostDto.fromEntity(e));
  }

  public async findAll(): Promise<HostDto[]> {
    return await this.hostRepository
      .find()
      .then((hosts) => hosts.map((e) => HostDto.fromEntity(e)));
  }

  public async findOne(id: string): Promise<HostDto> {
    const host = await this.hostRepository.findOne(id);
    if (!host) {
      throw new Error(`The host with id: ${id} does not exist!`);
    }
    return HostDto.fromEntity(host);
  }

  public async update(
    id: string,
    dto: UpdateHostDto,
    user: User,
  ): Promise<UpdateHostDto> {
    const host = await this.hostRepository.findOne(id);
    if (!host) {
      throw new Error(`The host with id: ${id} does not exist!`);
    }
    Object.assign(host, dto.toEntity(user));
    return this.hostRepository
      .save(host)
      .then((e) => UpdateHostDto.fromEntity(e));
  }

  public async remove(id: string): Promise<HostDto> {
    const host = await this.hostRepository.findOne(id);
    if (!host) {
      throw new Error(`The host with id: ${id} does not exist!`);
    }
    return this.hostRepository.remove(host).then((e) => HostDto.fromEntity(e));
  }
}
