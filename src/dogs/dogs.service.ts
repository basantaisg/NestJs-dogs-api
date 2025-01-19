import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dogs.interface';

@Injectable()
export class DogsService {
  private readonly dogsInfo: Dog[] = [];

  create(dog: Dog) {
    this.dogsInfo.push(dog);
  }

  findAll(): Dog[] {
    return this.dogsInfo;
  }
}
