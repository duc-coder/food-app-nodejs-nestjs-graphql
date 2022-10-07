import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createResInput {
  @Field()
  res_name!: string;

  @Field()
  desc!: string;

  @Field({ defaultValue: false })
  is_remove!: boolean;
}
