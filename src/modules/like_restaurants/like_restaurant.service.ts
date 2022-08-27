import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { LikeRestaurantInput } from '../users/dto/likeRestaurant.arg';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Injectable()
export class LikeRestaurantService {
  constructor(private prisma: PrismaService) {}

  async createLikeRes(
    data: LikeRestaurantInput,
  ): Promise<Pick<LikeRestaurantModel, any>> {
    return await this.prisma.like_res.create({
      data: {
        date_like: data.date_like,
        res_id: Number(data.res_id),
        user_id: Number(data.user_id),
      },
      include: {
        Restaurants_Like_res_res_idToRestaurants: true,
        Users_Like_res_user_idToUsers: true,
      },
    });
  }

  async findLikeResListByUserId(user_id: number): Promise<any> {
    return await this.prisma.like_res.findMany({
      where: {
        user_id,
        is_remove: false,
      },
    });
  }
}
