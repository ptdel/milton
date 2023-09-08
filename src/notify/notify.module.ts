import { Module } from '@nestjs/common';
import { NotifyGateway } from './notify.gateway';
import wsConfig from 'src/config/ws.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forFeature(wsConfig)],
  providers: [NotifyGateway],
  exports: [NotifyGateway],
})
export class NotifyModule {}
