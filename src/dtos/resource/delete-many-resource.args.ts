import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyResourceArgs {
  @Field(() => ResourceWhereInput, { nullable: true })
  @Type(() => ResourceWhereInput)
  where?: ResourceWhereInput;
}
