import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { LikeRestaurantModule } from '../like_restaurants/like_restaurant.module';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
@Module({
  imports: [PrismaModule.forRoot()],
  // controllers: [UserController],
  providers: [UserResolver, UserService, LikeRestaurantService],
})
export class UserModule {}
