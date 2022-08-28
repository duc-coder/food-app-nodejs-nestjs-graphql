import { Field, ID, InputType } from '@nestjs/graphql';
import { __Type } from 'graphql';

@InputType()
export class createResInput {
  @Field()
  res_name!: string;

  @Field()
  desc!: string;

  @Field({ defaultValue: false })
  is_remove!: boolean;
}
