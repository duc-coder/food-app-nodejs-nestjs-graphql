import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { LikeRestaurantResolver } from './like_restaurant.resolver';
import { LikeRestaurantService } from './like_restaurant.service';

@Module({
  imports: [PrismaModule.forRoot()],
  providers: [LikeRestaurantResolver, LikeRestaurantService],
})
export class LikeRestaurantModule {}
