import { Module } from "@nestjs/common";
import { S3Controller } from "./s3.controller";
import { CommandHandlers } from "./commands";
import { QueryHandlers } from "./queries";
import { DatabaseModule } from "../db/database.module";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [S3Controller],
  providers: [...CommandHandlers, ...QueryHandlers]
})
export class S3Module {}
