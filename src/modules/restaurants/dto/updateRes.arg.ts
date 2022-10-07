import { Field, ID, InputType } from '@nestjs/graphql';
import { __Type } from 'graphql';

@InputType()
export class updateResInput {
  @Field({ nullable: true })
  res_name?: string;

  @Field({ nullable: true })
  desc?: string;

  @Field({ nullable: true })
  is_remove!: boolean;
}
