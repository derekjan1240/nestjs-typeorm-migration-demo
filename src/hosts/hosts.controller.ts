import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HostsService } from './hosts.service';
import { HostDto } from './dto/host.dto';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { User } from '../common/decorators/user.decorator';
import { User as UserEntity } from 'src/database/entities/user.entity';

@Controller('hosts')
export class HostsController {
  constructor(private readonly hostsService: HostsService) {}

  @Post()
  public async create(
    @Body() dto: CreateHostDto,
    @User() user: UserEntity,
  ): Promise<CreateHostDto> {
    const dog = CreateHostDto.from(dto);
    return this.hostsService.create(dog, user);
  }

  @Get()
  public async findAll(): Promise<HostDto[]> {
    return await this.hostsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<HostDto> {
    return await this.hostsService.findOne(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdateHostDto,
    @User() user: UserEntity,
  ): Promise<UpdateHostDto> {
    const dog = UpdateHostDto.from(dto);
    return this.hostsService.update(id, dog, user);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<HostDto> {
    return await this.hostsService.remove(id);
  }
}
