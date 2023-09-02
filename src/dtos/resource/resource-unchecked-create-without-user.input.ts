import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceType } from '../prisma/resource-type.enum';

@InputType()
export class ResourceUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ResourceType, { nullable: false })
  resourceType!: keyof typeof ResourceType;
}
