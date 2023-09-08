import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import { utilities as win, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import logConfig from './config/log.config';
import { S3Module } from './s3/s3.module';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, logConfig],
    }),
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        level: configService.get<string>('log.level'),
        transports: [
          new winston.transports.Console({
            format: win.format.nestLike(configService.get<string>('app.name'), {
              colors: configService.get<boolean>('log.color'),
              prettyPrint: configService.get<boolean>('log.pretty'),
            }),
          }),
        ],
      }),
    }),
    S3Module,
    NotifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
