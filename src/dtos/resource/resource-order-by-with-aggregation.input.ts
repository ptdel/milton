import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ResourceCountOrderByAggregateInput } from './resource-count-order-by-aggregate.input';
import { ResourceMaxOrderByAggregateInput } from './resource-max-order-by-aggregate.input';
import { ResourceMinOrderByAggregateInput } from './resource-min-order-by-aggregate.input';

@InputType()
export class ResourceOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updatedAt?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  resourceType?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  userId?: SortOrderInput;

  @Field(() => ResourceCountOrderByAggregateInput, { nullable: true })
  _count?: ResourceCountOrderByAggregateInput;

  @Field(() => ResourceMaxOrderByAggregateInput, { nullable: true })
  _max?: ResourceMaxOrderByAggregateInput;

  @Field(() => ResourceMinOrderByAggregateInput, { nullable: true })
  _min?: ResourceMinOrderByAggregateInput;
}
