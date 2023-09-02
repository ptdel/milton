import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';
import { Type } from 'class-transformer';
import { ResourceOrderByWithRelationInput } from './resource-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResourceScalarFieldEnum } from './resource-scalar-field.enum';

@ArgsType()
export class FindManyResourceArgs {
  @Field(() => ResourceWhereInput, { nullable: true })
  @Type(() => ResourceWhereInput)
  where?: ResourceWhereInput;

  @Field(() => [ResourceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ResourceOrderByWithRelationInput>;

  @Field(() => ResourceWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ResourceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ResourceScalarFieldEnum>;
}
