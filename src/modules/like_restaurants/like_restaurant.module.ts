import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { RestaurantModule } from '../restaurants/restaurant.module';
import { RestaurantService } from '../restaurants/restaurant.service';
import { LikeRestaurantResolver } from './like_restaurant.resolver';
import { LikeRestaurantService } from './like_restaurant.service';

@Module({
  imports: [PrismaModule.forRoot(), RestaurantModule],
  providers: [LikeRestaurantResolver, LikeRestaurantService, RestaurantService],
})
export class LikeRestaurantModule {}
