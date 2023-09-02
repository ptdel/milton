import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereInput } from './resource-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumResourceTypeFilter } from '../prisma/enum-resource-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class ResourceWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [ResourceWhereInput], { nullable: true })
  AND?: Array<ResourceWhereInput>;

  @Field(() => [ResourceWhereInput], { nullable: true })
  OR?: Array<ResourceWhereInput>;

  @Field(() => [ResourceWhereInput], { nullable: true })
  NOT?: Array<ResourceWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  updatedAt?: DateTimeNullableFilter;

  @Field(() => EnumResourceTypeFilter, { nullable: true })
  resourceType?: EnumResourceTypeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  userId?: StringNullableFilter;

  @Field(() => UserNullableRelationFilter, { nullable: true })
  user?: UserNullableRelationFilter;
}
