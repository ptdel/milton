import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { StandardS3BucketCommand } from './commands/standard-s3-bucket.command';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { QueueService } from 'src/queue/queue.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';

@Controller('s3')
@UseInterceptors(LoggingInterceptor)
export class S3Controller {
  constructor(
    private readonly queue: QueueService,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Request an s3 bucket.' })
  @ApiOkResponse({
    description: 'returns the result of enqueueing the s3 bucket request.',
  })
  @ApiBadRequestResponse()
  async createS3Bucket(@Body() args: StandardS3BucketCommand): Promise<void> {
    await this.queue.publish<StandardS3BucketCommand>(args);
  }

  @EventPattern(StandardS3BucketCommand.name)
  async createS3BucketEvent(@Payload() args: StandardS3BucketCommand) {
    const response = await this.commandBus.execute<StandardS3BucketCommand>(
      new StandardS3BucketCommand(args),
    );
    return response;
  }
}
