import {
  Controller,
  Post,
  Request,
  Response,
  InternalServerErrorException,
} from '@nestjs/common';
import { API_ROUTES } from '../shares/commons/constants/constants';
import { RestaurantModel } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Controller()
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Post(API_ROUTES.RESTAURANT_IMAGE.PATH)
  async updateRestaurantImage(
    @Request() req,
    @Response() res,
  ): Promise<Pick<RestaurantModel, 'res_id' | 'image'>> {
    const {
      file,
      params: { id },
    } = req;

    try {
      const data = await this.restaurantService.uploadResImage(
        Number(id),
        file,
      );
      return res.send(data);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Failed to upload image');
    }
  }
}
