import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DogsModule } from './dogs/dogs.module';
// import { LoggerMiddleware } from './middlewares/logger.middleware';
import { DogsController } from './dogs/dogs.controller';
import { logger } from './middlewares/logger.middleware';

@Module({
  imports: [DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .exclude({
  //       path: 'dogs/breed/1',
  //       method: RequestMethod.GET,
  //     })
  //     .forRoutes(DogsController);
  // }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: '/dogs/breed/1', method: RequestMethod.GET })
      .forRoutes(DogsController);
  }
}
