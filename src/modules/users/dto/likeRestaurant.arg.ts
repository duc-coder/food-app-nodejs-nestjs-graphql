import { Field, ID, InputType } from '@nestjs/graphql';
import { __Type } from 'graphql';

@InputType()
export class LikeRestaurantInput {
  @Field((_type) => ID)
  res_id: number;

  @Field((_type) => ID)
  user_id: number;

  @Field()
  date_like: Date;

  @Field({ defaultValue: false })
  is_remove: boolean;
}
