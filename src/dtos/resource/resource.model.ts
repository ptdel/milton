import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ResourceType } from '../prisma/resource-type.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Resource {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => ResourceType, {nullable:false})
    resourceType!: keyof typeof ResourceType;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
