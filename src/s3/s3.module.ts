import { Module } from '@nestjs/common';
import { S3Controller } from './s3.controller';
import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';
import { DatabaseModule } from '../db/database.module';
import { CqrsModule } from '@nestjs/cqrs';
import { IacModule } from '../iac/iac.module';
import { QueueModule } from '../queue/queue.module';
import { NotifyModule } from '../notify/notify.module';

@Module({
  imports: [IacModule, QueueModule, NotifyModule, DatabaseModule, CqrsModule],
  controllers: [S3Controller],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class S3Module {}
