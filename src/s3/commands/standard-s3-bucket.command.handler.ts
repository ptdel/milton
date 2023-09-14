import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StandardS3BucketCommand } from './standard-s3-bucket.command';
import { IacService } from '../../iac/iac.service';
import { Bucket } from '@pulumi/aws/s3';
import { OutputMap, PulumiFn } from '@pulumi/pulumi/automation';
import { NotifyGateway } from '../../notify/notify.gateway';

@CommandHandler(StandardS3BucketCommand)
export class StandardS3BucketCommandHandler
  implements ICommandHandler<StandardS3BucketCommand>
{
  constructor(
    private readonly iac: IacService,
    private readonly notify: NotifyGateway,
  ) {}

  async execute(command: StandardS3BucketCommand): Promise<OutputMap> {
    const { name } = command;

    try {
      const bucket = await this.iac.createStack(this.standardS3Bucket(name));
      this.notify.server.clients.forEach((client: any) => {
        if (client.OPEN) {
          client.send(`${bucket.bucket.value} has been created!`);
        }
      });
      return bucket;
    } catch (e) {
      throw e;
    }
  }

  private standardS3Bucket(name: string): PulumiFn {
    /**
     * `standardS3Bucket` is an inline Pulumi program for deploying an s3 bucket
     *
     * @remarks You could say that an inline Pulumi program is essentially a
     * closure. We're passing in values to an inner function that will run with
     * those values after this handler has closed.
     */
    return async function (): Promise<Bucket | void> {
      const bucket = new Bucket(name, { tags: { Managed: 'true' } });
      return bucket;
    };
  }
}
