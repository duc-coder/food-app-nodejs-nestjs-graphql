import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { __Type } from 'graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  full_name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  is_remove?: boolean;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;
}
