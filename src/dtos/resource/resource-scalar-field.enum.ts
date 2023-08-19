import { registerEnumType } from '@nestjs/graphql';

export enum ResourceScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    resourceType = "resourceType",
    userId = "userId"
}


registerEnumType(ResourceScalarFieldEnum, { name: 'ResourceScalarFieldEnum', description: undefined })
