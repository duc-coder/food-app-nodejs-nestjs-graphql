import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { LikeRestaurantInput } from '../users/dto/likeRestaurant.arg';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Injectable()
export class LikeRestaurantService {
  constructor(private prisma: PrismaService) {}

  async createLikeRes(data: LikeRestaurantInput): Promise<any> {
    const result = await this.prisma.like_res.create({
      data: {
        date_like: data.date_like,
        Restaurant: {
          connect: {
            res_id: Number(data.res_id),
          },
        },
        User: {
          connect: {
            user_id: Number(data.user_id),
          },
        },
      },
      include: {
        User: true,
        Restaurant: true,
      },
    });
    return result;
  }

  async findLikeResListByUserId(user_id: number): Promise<any> {
    return await this.prisma.like_res.findMany({
      where: {
        is_remove: false,
        user_id: Number(user_id),
      },
      include: {
        User: true,
        Restaurant: true,
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
