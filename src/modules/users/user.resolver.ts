import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { LikeRestaurantModel } from '../like_restaurants/models/like_restaurant.model';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(
    private userService: UserService,
    private likeRestaurantService: LikeRestaurantService,
  ) {}

  @Query((_returns) => [UserModel], { name: 'user' })
  async users(): Promise<Pick<UserModel[], any>> {
    return this.userService.findUsers();
  }

  @Query((_returns) => UserModel, { name: 'user' })
  async userById(@Args('id') user_id: number): Promise<any> {
    return this.userService.findUserById(user_id);
  }

  @ResolveField('like_restaurants', (_returns) => [LikeRestaurantModel])
  async getLikeResListByUserId() {
    const user_id = 1;
    return this.likeRestaurantService.findAllLikeResList(Number(user_id));
  }
}
