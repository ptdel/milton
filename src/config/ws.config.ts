import { registerAs } from '@nestjs/config';

export default registerAs('ws', () => ({
  url: process.env.WS_URL ?? 'ws://localhost:8888/notify',
}));
