import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class UserModel {
  @Field((type) => ID)
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

  //   @Field(type => [Like_res])
  //   like_res: Like_res[];
}
