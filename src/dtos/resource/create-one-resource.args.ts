import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceCreateInput } from './resource-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneResourceArgs {

    @Field(() => ResourceCreateInput, {nullable:false})
    @Type(() => ResourceCreateInput)
    data!: ResourceCreateInput;
}
