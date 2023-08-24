import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StandardS3BucketCommand } from './standard-s3-bucket.command';
import { IacService } from 'src/iac/iac.service';
import { Bucket } from '@pulumi/aws/s3';
import { PulumiFn, UpResult } from '@pulumi/pulumi/automation';

@CommandHandler(StandardS3BucketCommand)
export class StandardS3BucketCommandHandler
  implements ICommandHandler<StandardS3BucketCommand>
{
  constructor(private readonly iac: IacService) {}

  async execute(command: StandardS3BucketCommand): Promise<UpResult> {
    const { name } = command;

    try {
      const bucket = await this.iac.createStack(this.standardS3Bucket(name));
      return bucket;
    } catch (e) {
      throw e;
    }
  }

  private standardS3Bucket(name: string): PulumiFn {
    return async function (): Promise<Record<string, any> | void> {
      const bucket = new Bucket(name, { tags: { Managed: 'true' } });
      return bucket;
    };
  }
}
