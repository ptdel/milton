import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResourcesInput } from './user-create-without-resources.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResourcesInput } from './user-create-or-connect-without-resources.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutResourcesInput {

    @Field(() => UserCreateWithoutResourcesInput, {nullable:true})
    @Type(() => UserCreateWithoutResourcesInput)
    create?: UserCreateWithoutResourcesInput;

    @Field(() => UserCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
