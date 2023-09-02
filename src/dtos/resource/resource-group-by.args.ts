import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';
import { Type } from 'class-transformer';
import { ResourceOrderByWithAggregationInput } from './resource-order-by-with-aggregation.input';
import { ResourceScalarFieldEnum } from './resource-scalar-field.enum';
import { ResourceScalarWhereWithAggregatesInput } from './resource-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ResourceCountAggregateInput } from './resource-count-aggregate.input';
import { ResourceMinAggregateInput } from './resource-min-aggregate.input';
import { ResourceMaxAggregateInput } from './resource-max-aggregate.input';

@ArgsType()
export class ResourceGroupByArgs {
  @Field(() => ResourceWhereInput, { nullable: true })
  @Type(() => ResourceWhereInput)
  where?: ResourceWhereInput;

  @Field(() => [ResourceOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ResourceOrderByWithAggregationInput>;

  @Field(() => [ResourceScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ResourceScalarFieldEnum>;

  @Field(() => ResourceScalarWhereWithAggregatesInput, { nullable: true })
  having?: ResourceScalarWhereWithAggregatesInput;

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
