import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumResourceTypeWithAggregatesFilter } from '../prisma/enum-resource-type-with-aggregates-filter.input';

@InputType()
export class ResourceScalarWhereWithAggregatesInput {

    @Field(() => [ResourceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ResourceScalarWhereWithAggregatesInput>;

    @Field(() => [ResourceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ResourceScalarWhereWithAggregatesInput>;

    @Field(() => [ResourceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ResourceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumResourceTypeWithAggregatesFilter, {nullable:true})
    resourceType?: EnumResourceTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
