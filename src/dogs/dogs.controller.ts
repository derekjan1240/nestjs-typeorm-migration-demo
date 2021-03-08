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
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { ValidationPipe } from '../pipe/validation.pipe';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() body: CreateDogDto) {
    return this.dogsService.create(body);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
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
