import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.NAME ?? 'milton',
  port: process.env.PORT ?? 8080,
  region: process.env.REGION ?? 'us-east-2',
}));
