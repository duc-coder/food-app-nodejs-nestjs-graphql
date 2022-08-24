import { Field, ID, ObjectType } from '@nestjs/graphql';
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

  @Field((_type) => RestaurantModel)
  res_id: RestaurantModel;

  @Field((_type) => UserModel)
  user_id: UserModel;
}