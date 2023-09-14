import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResourceType } from '../prisma/resource-type.enum';

@ObjectType()
export class ResourceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ResourceType, {nullable:true})
    resourceType?: keyof typeof ResourceType;

    @Field(() => String, {nullable:true})
    userId?: string;
}
