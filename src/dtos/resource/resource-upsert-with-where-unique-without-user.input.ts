import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceUpdateWithoutUserInput } from './resource-update-without-user.input';
import { ResourceCreateWithoutUserInput } from './resource-create-without-user.input';

@InputType()
export class ResourceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;

    @Field(() => ResourceUpdateWithoutUserInput, {nullable:false})
    @Type(() => ResourceUpdateWithoutUserInput)
    update!: ResourceUpdateWithoutUserInput;

    @Field(() => ResourceCreateWithoutUserInput, {nullable:false})
    @Type(() => ResourceCreateWithoutUserInput)
    create!: ResourceCreateWithoutUserInput;
}
