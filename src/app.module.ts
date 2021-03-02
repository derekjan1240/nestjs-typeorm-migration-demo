import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { HostsModule } from './hosts/hosts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    DogsModule,
    HostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
