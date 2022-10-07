import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createResInput } from './dto/createRes.arg';
import { updateResInput } from './dto/updateRes.arg';
import { RestaurantModel } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver((_of) => RestaurantModel)
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Query((_returns) => [RestaurantModel])
  async getResList(): Promise<RestaurantModel[]> {
    return await this.restaurantService.find();
  }

  @Query((_returns) => RestaurantModel)
  async getResById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<RestaurantModel> {
    return await this.restaurantService.findById(id);
  }

  @Mutation((_returns) => RestaurantModel)
  async createRestaurant(
    @Args('data') data: createResInput,
  ): Promise<RestaurantModel> {
    return await this.restaurantService.create(data);
  }

  @Mutation((_returns) => RestaurantModel)
  async updateRestaurant(
    @Args('id', { type: () => Int }) res_id: number,
    @Args('data') data: updateResInput,
  ): Promise<RestaurantModel> {
    return await this.restaurantService.update(data, Number(res_id));
  }
}
