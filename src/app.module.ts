import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikeRestaurantModule } from './modules/like_restaurants/like_restaurant.module';
import { RestaurantModule } from './modules/restaurants/restaurant.module';
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
export class AppModule {}
