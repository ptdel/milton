import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceCreateWithoutUserInput } from './resource-create-without-user.input';

@InputType()
export class ResourceCreateOrConnectWithoutUserInput {
  @Field(() => ResourceWhereUniqueInput, { nullable: false })
  @Type(() => ResourceWhereUniqueInput)
  where!: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;

  @Field(() => ResourceCreateWithoutUserInput, { nullable: false })
  @Type(() => ResourceCreateWithoutUserInput)
  create!: ResourceCreateWithoutUserInput;
}
