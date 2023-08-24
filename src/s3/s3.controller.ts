import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { StandardS3BucketCommand } from './commands/standard-s3-bucket.command';
import { UpResult } from '@pulumi/pulumi/automation';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('s3')
@UseInterceptors(LoggingInterceptor)
export class S3Controller {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @ApiOperation({ summary: 'Create an s3 bucket.' })
  @ApiOkResponse({
    description: 'returns the result of the s3 bucket creation task.',
  })
  @ApiBadRequestResponse()
  async createS3Bucket(
    @Body() args: StandardS3BucketCommand,
  ): Promise<UpResult> {
    const bucket = await this.commandBus.execute<StandardS3BucketCommand>(args);
    return bucket;
  }
}
