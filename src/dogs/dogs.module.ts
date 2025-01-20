import { Global, Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Global()
@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
