import { registerAs } from '@nestjs/config';

export default registerAs('log', () => ({
  level: process.env.LOG_LEVEL ?? 'info',
}));
