import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumResourceTypeFilter } from '../prisma/enum-resource-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ResourceScalarWhereInput {
  @Field(() => [ResourceScalarWhereInput], { nullable: true })
  AND?: Array<ResourceScalarWhereInput>;

  @Field(() => [ResourceScalarWhereInput], { nullable: true })
  OR?: Array<ResourceScalarWhereInput>;

  @Field(() => [ResourceScalarWhereInput], { nullable: true })
  NOT?: Array<ResourceScalarWhereInput>;

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
}
