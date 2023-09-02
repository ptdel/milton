import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceType } from '../prisma/resource-type.enum';
import { UserCreateNestedOneWithoutResourcesInput } from '../user/user-create-nested-one-without-resources.input';

@InputType()
export class ResourceCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ResourceType, { nullable: false })
  resourceType!: keyof typeof ResourceType;

  @Field(() => UserCreateNestedOneWithoutResourcesInput, { nullable: true })
  user?: UserCreateNestedOneWithoutResourcesInput;
}
