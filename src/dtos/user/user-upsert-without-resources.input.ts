import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutResourcesInput } from './user-update-without-resources.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResourcesInput } from './user-create-without-resources.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutResourcesInput {

    @Field(() => UserUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => UserUpdateWithoutResourcesInput)
    update!: UserUpdateWithoutResourcesInput;

    @Field(() => UserCreateWithoutResourcesInput, {nullable:false})
    @Type(() => UserCreateWithoutResourcesInput)
    create!: UserCreateWithoutResourcesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
