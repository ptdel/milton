import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceScalarWhereInput } from './resource-scalar-where.input';
import { Type } from 'class-transformer';
import { ResourceUpdateManyMutationInput } from './resource-update-many-mutation.input';

@InputType()
export class ResourceUpdateManyWithWhereWithoutUserInput {

    @Field(() => ResourceScalarWhereInput, {nullable:false})
    @Type(() => ResourceScalarWhereInput)
    where!: ResourceScalarWhereInput;

    @Field(() => ResourceUpdateManyMutationInput, {nullable:false})
    @Type(() => ResourceUpdateManyMutationInput)
    data!: ResourceUpdateManyMutationInput;
}
