import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutResourcesInput } from './user-update-without-resources.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutResourcesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutResourcesInput, { nullable: false })
  @Type(() => UserUpdateWithoutResourcesInput)
  data!: UserUpdateWithoutResourcesInput;
}
