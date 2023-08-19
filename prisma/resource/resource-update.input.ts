import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumResourceTypeFieldUpdateOperationsInput } from '../prisma/enum-resource-type-field-update-operations.input';
import { UserUpdateOneRequiredWithoutResourcesNestedInput } from '../user/user-update-one-required-without-resources-nested.input';

@InputType()
export class ResourceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumResourceTypeFieldUpdateOperationsInput, {nullable:true})
    resourceType?: EnumResourceTypeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutResourcesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput;
}
