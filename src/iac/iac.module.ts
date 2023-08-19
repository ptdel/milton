import { Module } from "@nestjs/common";
import { IacService } from "./iac.service";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/app.config";

@Module({
  imports: [ConfigModule.forFeature(appConfig)],
  providers: [IacService],
  exports: [IacService],
})
export class IacModule {}
