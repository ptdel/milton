import { registerAs } from '@nestjs/config';

export default registerAs('queue', () => ({
  name: process.env.QUEUE_NAME ?? 'please-build',
  host: process.env.QUEUE_HOST ?? 'localhost',
  port: process.env.QUEUE_PORT ?? 6379,
}));
