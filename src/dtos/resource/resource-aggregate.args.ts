import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';
import { Type } from 'class-transformer';
import { ResourceOrderByWithRelationInput } from './resource-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResourceCountAggregateInput } from './resource-count-aggregate.input';
import { ResourceMinAggregateInput } from './resource-min-aggregate.input';
import { ResourceMaxAggregateInput } from './resource-max-aggregate.input';

@ArgsType()
export class ResourceAggregateArgs {
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

  @Field(() => ResourceCountAggregateInput, { nullable: true })
  _count?: ResourceCountAggregateInput;

  @Field(() => ResourceMinAggregateInput, { nullable: true })
  _min?: ResourceMinAggregateInput;

  @Field(() => ResourceMaxAggregateInput, { nullable: true })
  _max?: ResourceMaxAggregateInput;
}
