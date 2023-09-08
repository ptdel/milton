import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientOptions,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { QueueService } from './queue.service';

@Module({
  providers: [
    {
      provide: 'QUEUE_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config: ClientOptions = {
          transport: Transport.REDIS,
          options: {
            host: configService.get<string>('queue.host'),
            port: configService.get<number>('queue.port'),
          },
        };
        return ClientProxyFactory.create(config);
      },
    },
    QueueService,
  ],
  exports: [QueueService],
})
export class QueueModule {}
