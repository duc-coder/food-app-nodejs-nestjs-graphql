import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { uploadImageFireBase } from '../firebase/firebase.service';
import { FIRE_BASE_FOLDER_URL } from '../shares/commons/constants/constants';
import { RestaurantModel } from './models/restaurant.model';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async find(): Promise<RestaurantModel[]> {
    return this.prisma.restaurants.findMany({
      where: { is_remove: false },
    });
  }

  async findById(res_id: number): Promise<RestaurantModel> {
    return this.prisma.restaurants.findFirst({
      where: { is_remove: false, res_id },
    });
  }

  async create(data: any): Promise<RestaurantModel> {
    return this.prisma.restaurants.create({ data });
  }

  async update(data: any, res_id: number): Promise<RestaurantModel> {
    await this.prisma.restaurants.findFirstOrThrow({
      where: {
        res_id,
        is_remove: false,
      },
    });

    return this.prisma.restaurants.update({
      where: { res_id },
      data,
    });
  }

  async uploadResImage(
    id,
    file,
  ): Promise<Pick<RestaurantModel, 'res_id' | 'image'>> {
    try {
      const imageUrl = await uploadImageFireBase(
        FIRE_BASE_FOLDER_URL.RES_IMAGE,
        file,
      );
      await this.prisma.restaurants.update({
        where: { res_id: id },
        data: { image: imageUrl },
      });
      return { res_id: id, image: imageUrl as string };
    } catch (error) {
      return error;
    }
  }
}
