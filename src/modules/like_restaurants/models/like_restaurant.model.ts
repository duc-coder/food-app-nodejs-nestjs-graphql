import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { RestaurantModel } from 'src/modules/restaurants/models/restaurant.model';
import { UserModel } from 'src/modules/users/models/user.model';

@ObjectType({ description: 'like_restaurant' })
export class LikeRestaurantModel {
  @Field((_type) => ID)
  id: number;

  @Field()
  date_like: Date;

  @Field({ defaultValue: false })
  is_remove: boolean;

  // @Field((_type) => RestaurantModel)
  @Field((_type) => Int)
  res_id: number;

  @Field((_type) => RestaurantModel)
  Restaurant: RestaurantModel;

  // @Field((_type) => UserModel)
  @Field((_type) => Int)
  user_id: number;

  @Field((_type) => RestaurantModel)
  User: RestaurantModel;
}
