import { Field, ID, InputType } from '@nestjs/graphql';
import { __Type } from 'graphql';

@InputType()
export class CreateUserInput {
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
}
