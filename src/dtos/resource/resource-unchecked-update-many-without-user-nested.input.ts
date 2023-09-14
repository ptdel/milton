import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutUserInput } from './resource-create-without-user.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutUserInput } from './resource-create-or-connect-without-user.input';
import { ResourceUpsertWithWhereUniqueWithoutUserInput } from './resource-upsert-with-where-unique-without-user.input';
import { ResourceCreateManyUserInputEnvelope } from './resource-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { ResourceUpdateWithWhereUniqueWithoutUserInput } from './resource-update-with-where-unique-without-user.input';
import { ResourceUpdateManyWithWhereWithoutUserInput } from './resource-update-many-with-where-without-user.input';
import { ResourceScalarWhereInput } from './resource-scalar-where.input';

@InputType()
export class ResourceUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ResourceCreateWithoutUserInput], {nullable:true})
    @Type(() => ResourceCreateWithoutUserInput)
    create?: Array<ResourceCreateWithoutUserInput>;

    @Field(() => [ResourceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ResourceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ResourceCreateOrConnectWithoutUserInput>;

    @Field(() => [ResourceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ResourceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ResourceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ResourceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ResourceCreateManyUserInputEnvelope)
    createMany?: ResourceCreateManyUserInputEnvelope;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ResourceWhereUniqueInput, 'id'>>;

    @Field(() => [ResourceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ResourceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ResourceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ResourceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ResourceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ResourceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ResourceScalarWhereInput], {nullable:true})
    @Type(() => ResourceScalarWhereInput)
    deleteMany?: Array<ResourceScalarWhereInput>;
}
