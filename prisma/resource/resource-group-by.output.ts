import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResourceType } from '../prisma/resource-type.enum';
import { ResourceCountAggregate } from './resource-count-aggregate.output';
import { ResourceMinAggregate } from './resource-min-aggregate.output';
import { ResourceMaxAggregate } from './resource-max-aggregate.output';

@ObjectType()
export class ResourceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ResourceType, {nullable:false})
    resourceType!: keyof typeof ResourceType;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ResourceCountAggregate, {nullable:true})
    _count?: ResourceCountAggregate;

    @Field(() => ResourceMinAggregate, {nullable:true})
    _min?: ResourceMinAggregate;

    @Field(() => ResourceMaxAggregate, {nullable:true})
    _max?: ResourceMaxAggregate;
}
