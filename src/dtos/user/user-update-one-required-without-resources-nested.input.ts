import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResourcesInput } from './user-create-without-resources.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResourcesInput } from './user-create-or-connect-without-resources.input';
import { UserUpsertWithoutResourcesInput } from './user-upsert-without-resources.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutResourcesInput } from './user-update-to-one-with-where-without-resources.input';

@InputType()
export class UserUpdateOneRequiredWithoutResourcesNestedInput {
  @Field(() => UserCreateWithoutResourcesInput, { nullable: true })
  @Type(() => UserCreateWithoutResourcesInput)
  create?: UserCreateWithoutResourcesInput;

  @Field(() => UserCreateOrConnectWithoutResourcesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutResourcesInput)
  connectOrCreate?: UserCreateOrConnectWithoutResourcesInput;

  @Field(() => UserUpsertWithoutResourcesInput, { nullable: true })
  @Type(() => UserUpsertWithoutResourcesInput)
  upsert?: UserUpsertWithoutResourcesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

  @Field(() => UserUpdateToOneWithWhereWithoutResourcesInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutResourcesInput)
  update?: UserUpdateToOneWithWhereWithoutResourcesInput;
}
