import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumResourceTypeFilter } from '../prisma/enum-resource-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class ResourceWhereInput {
  @Field(() => [ResourceWhereInput], { nullable: true })
  AND?: Array<ResourceWhereInput>;

  @Field(() => [ResourceWhereInput], { nullable: true })
  OR?: Array<ResourceWhereInput>;

  @Field(() => [ResourceWhereInput], { nullable: true })
  NOT?: Array<ResourceWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

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
