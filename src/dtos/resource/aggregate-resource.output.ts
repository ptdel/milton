import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResourceCountAggregate } from './resource-count-aggregate.output';
import { ResourceMinAggregate } from './resource-min-aggregate.output';
import { ResourceMaxAggregate } from './resource-max-aggregate.output';

@ObjectType()
export class AggregateResource {
  @Field(() => ResourceCountAggregate, { nullable: true })
  _count?: ResourceCountAggregate;

  @Field(() => ResourceMinAggregate, { nullable: true })
  _min?: ResourceMinAggregate;

  @Field(() => ResourceMaxAggregate, { nullable: true })
  _max?: ResourceMaxAggregate;
}
