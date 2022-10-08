import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusboyMiddleware } from './middlewares/busboy.middleware';
import { LikeRestaurantModule } from './modules/like_restaurants/like_restaurant.module';
import { RestaurantModule } from './modules/restaurants/restaurant.module';
import { RestaurantResolver } from './modules/restaurants/restaurant.resolver';
import { API_ROUTES } from './modules/shares/commons/constants/constants';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    PrismaModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), '/src/graphql/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
      },
    }),
    UserModule,
    RestaurantModule,
    LikeRestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BusboyMiddleware).forRoutes({
      path: API_ROUTES.RESTAURANT_IMAGE.PATH,
      method: RequestMethod.POST,
    });
  }
}
