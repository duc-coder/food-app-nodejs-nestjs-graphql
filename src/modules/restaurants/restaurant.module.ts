import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [PrismaModule.forRoot()],
  providers: [RestaurantResolver, RestaurantService, LikeRestaurantService],
})
export class RestaurantModule {}
