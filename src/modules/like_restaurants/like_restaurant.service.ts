import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Injectable()
export class LikeRestaurantService {
  constructor(private prisma: PrismaService) {}

  async findAllLikeResList(
    user_id: number,
  ): Promise<Pick<LikeRestaurantModel, any>> {
    return await this.prisma.like_res.findMany({
      where: {
        user_id,
        is_remove: false,
      },
    });
  }
}
