import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class updateResImageInput {
  @Field({ nullable: true })
  filename: string;

  @Field({ nullable: true })
  mimeType: string;

  @Field({ nullable: true })
  encoding: string;
}
