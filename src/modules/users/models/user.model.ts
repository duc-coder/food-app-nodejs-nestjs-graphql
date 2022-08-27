import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LikeRestaurantModel } from 'src/modules/like_restaurants/models/like_restaurant.model';

@ObjectType({ description: 'user ' })
export class UserModel {
  @Field((_type) => ID)
  user_id: number;

  @Field()
  full_name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ defaultValue: 'CLIENT' })
  role: string;

  @Field({ defaultValue: false })
  is_remove: boolean;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field((_type) => [LikeRestaurantModel], { nullable: 'itemsAndList' })
  like_restaurants?: LikeRestaurantModel[];
}
