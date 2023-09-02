import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneResourceArgs {
  @Field(() => ResourceWhereUniqueInput, { nullable: false })
  @Type(() => ResourceWhereUniqueInput)
  where!: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;
}
