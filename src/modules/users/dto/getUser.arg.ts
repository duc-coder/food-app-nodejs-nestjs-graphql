import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field((_type) => ID)
  user_id!: number;
}
