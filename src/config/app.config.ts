import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.NAME ?? 'milton',
  port: process.env.PORT ?? 8080,
  profile: process.env.PROFILE ?? 'ops',
}));
