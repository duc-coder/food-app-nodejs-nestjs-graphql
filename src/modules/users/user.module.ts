import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
@Module({
  imports: [PrismaModule.forRoot()],
  providers: [UserResolver, UserService, LikeRestaurantService],
})
export class UserModule {}
