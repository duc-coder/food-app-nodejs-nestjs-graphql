import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RestaurantModel } from '../restaurants/models/restaurant.model';
import { RestaurantService } from '../restaurants/restaurant.service';
import { LikeRestaurantService } from './like_restaurant.service';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Resolver((_of) => LikeRestaurantModel)
export class LikeRestaurantResolver {
  constructor(
    private likeRestaurantService: LikeRestaurantService,
    private restaurantService: RestaurantService,
  ) {}

  @Query((_returns) => LikeRestaurantModel)
  async getLikeResListByUserId(
    @Args('user_id') user_id: number,
  ): Promise<LikeRestaurantModel[]> {
    return await this.likeRestaurantService.findLikeResListByUserId(
      Number(user_id),
    );
  }

  @ResolveField('restaurant', (_returns) => RestaurantModel)
  async getResById(@Parent() like_res: LikeRestaurantModel) {
    const { res_id } = like_res;
    console.log('run getResById');

    return await this.restaurantService.findResById(Number(res_id));
  }
}
