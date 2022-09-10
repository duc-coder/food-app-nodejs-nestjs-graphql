import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { RestaurantModel } from './models/restaurant.model';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async findResList(): Promise<RestaurantModel[]> {
    return this.prisma.restaurants.findMany({
      where: { is_remove: false },
    });
  }

  async findResById(res_id: number): Promise<RestaurantModel> {
    return this.prisma.restaurants.findFirst({
      where: { is_remove: false, res_id },
    });
  }

  async createRestaurant(data: any): Promise<RestaurantModel> {
    return this.prisma.restaurants.create({ data });
  }
}
