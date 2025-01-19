import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogBreed } from './dto/update-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dogs.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  // @Header('Token', 'hskljhdsakfhljasdhklf')
  // @HttpCode(201)
  async create(@Body() dogInformation: CreateDogDto) {
    return this.dogsService.create(dogInformation);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get('breed')
  findOneBreed(@Param('breed') breed: CreateDogDto) {
    return { breed };
  }

  @Get('/breed/:id')
  findOneBreedById(@Param('id') id: string) {
    return { id };
  }

  @Put('/breed/:id')
  update(@Param('id') id: string, @Body() updatedBreed: UpdateDogBreed) {
    return { id, ...updatedBreed };
  }

  @Delete('/breed/:id')
  delete(@Param('id') id: string) {
    return 'Deleted Successfully! ' + id;
  }
}
