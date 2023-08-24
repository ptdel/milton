import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class StandardS3BucketCommand {
  /**
   * Creates a regular as-is s3 bucket given just a name.
   *
   * @remarks
   * When you're constructing a command, sometimes it makes more sense to create
   * a DTO and provide that as a single input to the constructor and use
   * destructuring in yout handler, rather than put lots of inputs into your
   * command.
   *
   * @param name - A name to give to the s3 bucket.
   */
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  constructor(partial: Partial<StandardS3BucketCommand>) {
    Object.assign(this, partial);
  }
}
