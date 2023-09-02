import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateManyUserInput } from './resource-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ResourceCreateManyUserInputEnvelope {
  @Field(() => [ResourceCreateManyUserInput], { nullable: false })
  @Type(() => ResourceCreateManyUserInput)
  data!: Array<ResourceCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
