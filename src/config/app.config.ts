import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.NAME ?? 'milton',
  port: process.env.PORT ?? 8080,

  // some of these settings could be moved into a pulumi-specific config
  secrets: process.env.SECRETS_PROVIDER ?? 'passphrase',
  backend: process.env.PULUMI_BACKEND_URL ?? 's3://pulumi-state-bucket',
}));
