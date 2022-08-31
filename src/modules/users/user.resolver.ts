import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import _ from 'lodash';
import { LikeRestaurantService } from '../like_restaurants/like_restaurant.service';
import { LikeRestaurantModel } from '../like_restaurants/models/like_restaurant.model';
import { CreateUserInput } from './dto/createUser.arg';
import { GetUserArgs } from './dto/getUser.arg';
import { LikeRestaurantInput } from './dto/likeRestaurant.arg';
import { UpdateUserInput } from './dto/updateUser.arg';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver((_of) => UserModel)
export class UserResolver {
  constructor(
    private userService: UserService,
    private likeRestaurantService: LikeRestaurantService,
  ) {}

  @Subscription((_returns) => LikeRestaurantModel, {
    filter: (payload, variables) =>
      payload.likeRestaurant.title === variables.title,
  })
  likeRestaurant() {
    return pubSub.asyncIterator('likeRestaurant');
  }

  @Mutation((_returns) => LikeRestaurantModel)
  async addLikeRestaurant(
    @Args('data') data: LikeRestaurantInput,
  ): Promise<LikeRestaurantModel> {
    const result = await this.likeRestaurantService.createLikeRes(data);
    pubSub.publish('likeRestaurant', { likeRestaurant: result });
    return result;
  }

  @Mutation((_returns) => UserModel)
  async deleteUserById(@Args('id') user_id: number): Promise<UserModel> {
    const result = await this.userService.deleteUserById(Number(user_id));
    return result;
  }

  @Mutation((_returns) => UserModel)
  async createUser(@Args('data') data: CreateUserInput): Promise<UserModel> {
    return await this.userService.createUser(data);
  }

  @Mutation((_returns) => UserModel)
  updateUserById(
    @Args('id', { type: () => String }) user_id: Pick<UserModel, 'user_id'>,
    @Args('data') data: UpdateUserInput,
  ): Promise<UserModel> {
    // if (!data) return;

    return this.userService.updateUserById(Number(user_id), data);
  }

  @Query((_returns) => [UserModel])
  async getUsers(): Promise<UserModel[]> {
    return await this.userService.findUsers();
  }

  @Query((_returns) => UserModel)
  async getUserById(
    @Args('id', { type: () => String }) user_id: GetUserArgs,
  ): Promise<any> {
    const user = await this.userService.findUserById(Number(user_id));
    return user;
  }

  @ResolveField('like_restaurants', (_returns) => [LikeRestaurantModel], {
    nullable: 'itemsAndList',
  })
  async getLikeResListByUserId(@Parent() user: UserModel) {
    const { user_id } = user;
    return await this.likeRestaurantService.findLikeResListByUserId(
      Number(user_id),
    );
  }
}
