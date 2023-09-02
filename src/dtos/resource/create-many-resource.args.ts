import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceCreateManyInput } from './resource-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyResourceArgs {
  @Field(() => [ResourceCreateManyInput], { nullable: false })
  @Type(() => ResourceCreateManyInput)
  data!: Array<ResourceCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
