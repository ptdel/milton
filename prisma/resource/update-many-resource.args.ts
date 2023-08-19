import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceUpdateManyMutationInput } from './resource-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ResourceWhereInput } from './resource-where.input';

@ArgsType()
export class UpdateManyResourceArgs {

    @Field(() => ResourceUpdateManyMutationInput, {nullable:false})
    @Type(() => ResourceUpdateManyMutationInput)
    data!: ResourceUpdateManyMutationInput;

    @Field(() => ResourceWhereInput, {nullable:true})
    @Type(() => ResourceWhereInput)
    where?: ResourceWhereInput;
}
