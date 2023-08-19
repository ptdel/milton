import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';

@InputType()
export class ResourceListRelationFilter {

    @Field(() => ResourceWhereInput, {nullable:true})
    every?: ResourceWhereInput;

    @Field(() => ResourceWhereInput, {nullable:true})
    some?: ResourceWhereInput;

    @Field(() => ResourceWhereInput, {nullable:true})
    none?: ResourceWhereInput;
}
