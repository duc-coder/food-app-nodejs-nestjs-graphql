import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { LikeRestaurantModule } from '../like_restaurants/like_restaurant.module';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { RestaurantModule } from '../restaurants/restaurant.module';
import { RestaurantService } from '../restaurants/restaurant.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
@Module({
  imports: [PrismaModule.forRoot(), LikeRestaurantModule, RestaurantModule],
  providers: [
    UserResolver,
    UserService,
    LikeRestaurantService,
    RestaurantService,
  ],
})
export class UserModule {}
