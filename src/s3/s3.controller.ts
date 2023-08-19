import { Controller, Param, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { StandardS3BucketCommand } from "./commands/standard-s3-bucket.command";
import { UpResult } from "@pulumi/pulumi/automation";

@Controller('s3')
export class S3Controller {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    @ApiOperation({ summary: "Create an s3 bucket." })
    @ApiOkResponse({
      description: 'returns the result of the s3 bucket creation task.'
    })
    @ApiBadRequestResponse()
    async createS3Bucket(@Param('name') name: string): Promise<UpResult> {
	const bucket = await this.commandBus.execute<StandardS3BucketCommand>(
	    new StandardS3BucketCommand("bill"),
	);
	return bucket;
    }
}
