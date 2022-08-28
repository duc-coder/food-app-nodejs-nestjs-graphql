import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { LikeRestaurantModel } from '../like_restaurants/models/like_restaurant.model';
import { createResInput } from './dto/createRes.arg';
import { RestaurantModel } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver((_of) => RestaurantModel)
export class RestaurantResolver {
  constructor(
    private restaurantService: RestaurantService,
    private likeRestaurantService: LikeRestaurantService,
  ) {}

  @Query((_returns) => RestaurantModel)
  async getResList(): Promise<any> {
    return await this.restaurantService.findResList();
  }

  @Mutation((_returns) => RestaurantModel)
  async createRestaurant(
    @Args('data') data: createResInput,
  ): Promise<RestaurantModel> {
    return await this.restaurantService.createRestaurant(data);
  }

  @ResolveField('like_restaurants', (_returns) => [LikeRestaurantModel])
  async getLikeResListByResId(@Parent() res: RestaurantModel) {
    const { res_id } = res;
    return this.likeRestaurantService.findLikeResListByResId(Number(res_id));
  }
}
