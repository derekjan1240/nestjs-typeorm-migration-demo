import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from '../database/entities/dog.entity';
import { Host } from '../database/entities/host.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog, Host])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
