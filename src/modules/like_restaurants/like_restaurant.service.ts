import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { LikeRestaurantInput } from '../users/dto/likeRestaurant.arg';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Injectable()
export class LikeRestaurantService {
  constructor(private prisma: PrismaService) {}

  async createLikeRes(data: LikeRestaurantInput): Promise<LikeRestaurantModel> {
    const result = await this.prisma.like_res.create({
      data: {
        date_like: data.date_like,
        Restaurants: {
          connect: {
            res_id: Number(data.res_id),
          },
        },
        Users: {
          connect: {
            user_id: Number(data.user_id),
          },
        },
      },
      include: {
        Users: true,
        Restaurants: true,
      },
    });
    return result;
  }

  async findLikeResListByUserId(
    user_id: number,
  ): Promise<LikeRestaurantModel[]> {
    return await this.prisma.like_res.findMany({
      where: {
        is_remove: false,
        user_id: Number(user_id),
      },
      include: {
        Users: true,
        Restaurants: true,
      },
    });
  }

  async findLikeResListByResId(res_id: number): Promise<any> {
    return await this.prisma.like_res.findMany({
      where: {
        res_id: Number(res_id),
        is_remove: false,
      },
    });
  }
}
