import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LikeRestaurantModel } from 'src/modules/like_restaurants/models/like_restaurant.model';

@ObjectType({ description: 'restaurant' })
export class RestaurantModel {
  @Field((_type) => ID)
  res_id!: number;

  @Field()
  res_name!: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  desc?: string;

  @Field({ defaultValue: false })
  is_remove!: boolean;

  @Field((_type) => [LikeRestaurantModel], { nullable: 'itemsAndList' })
  like_restaurants?: LikeRestaurantModel[];
}
