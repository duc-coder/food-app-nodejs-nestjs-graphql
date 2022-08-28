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

  async createRestaurant(data: any): Promise<RestaurantModel> {
    return this.prisma.restaurants.create({ data });
  }
}
