import { registerEnumType } from '@nestjs/graphql';

export enum ResourceType {
  Ec2Instance = 'Ec2Instance',
}

registerEnumType(ResourceType, {
  name: 'ResourceType',
  description: undefined,
});
