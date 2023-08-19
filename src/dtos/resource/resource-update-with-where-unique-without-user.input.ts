import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceUpdateWithoutUserInput } from './resource-update-without-user.input';

@InputType()
export class ResourceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>;

    @Field(() => ResourceUpdateWithoutUserInput, {nullable:false})
    @Type(() => ResourceUpdateWithoutUserInput)
    data!: ResourceUpdateWithoutUserInput;
}
