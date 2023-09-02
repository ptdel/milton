import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutUserInput } from './resource-create-without-user.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutUserInput } from './resource-create-or-connect-without-user.input';
import { ResourceCreateManyUserInputEnvelope } from './resource-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';

@InputType()
export class ResourceUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [ResourceCreateWithoutUserInput], { nullable: true })
  @Type(() => ResourceCreateWithoutUserInput)
  create?: Array<ResourceCreateWithoutUserInput>;

  @Field(() => [ResourceCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ResourceCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ResourceCreateOrConnectWithoutUserInput>;

  @Field(() => ResourceCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ResourceCreateManyUserInputEnvelope)
  createMany?: ResourceCreateManyUserInputEnvelope;

  @Field(() => [ResourceWhereUniqueInput], { nullable: true })
  @Type(() => ResourceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>>;
}
