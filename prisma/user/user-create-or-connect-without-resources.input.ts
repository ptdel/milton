import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResourcesInput } from './user-create-without-resources.input';

@InputType()
export class UserCreateOrConnectWithoutResourcesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutResourcesInput, {nullable:false})
    @Type(() => UserCreateWithoutResourcesInput)
    create!: UserCreateWithoutResourcesInput;
}
