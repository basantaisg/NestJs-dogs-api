import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogBreed } from './dto/update-dog.dto';
import { DogsService } from './dogs.service';

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
  async findAll() {
    try {
      return this.dogsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('breed')
  findOneBreed(@Param('breed') breed: CreateDogDto) {
    return { breed };
  }

  @Get('/breed/:id')
  findOneBreedById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Query('showNav') showNav?: string,
  ) {
    console.log(typeof showNav);
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
