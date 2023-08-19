import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceCreateInput } from './resource-create.input';
import { ResourceUpdateInput } from './resource-update.input';

@ArgsType()
export class UpsertOneResourceArgs {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;

    @Field(() => ResourceCreateInput, {nullable:false})
    @Type(() => ResourceCreateInput)
    create!: ResourceCreateInput;

    @Field(() => ResourceUpdateInput, {nullable:false})
    @Type(() => ResourceUpdateInput)
    update!: ResourceUpdateInput;
}
