import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceUncheckedCreateNestedManyWithoutUserInput } from '../resource/resource-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ResourceUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  resources?: ResourceUncheckedCreateNestedManyWithoutUserInput;
}
