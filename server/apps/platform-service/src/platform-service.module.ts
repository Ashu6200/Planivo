import { Module } from "@nestjs/common"
import { PlatformServiceController } from "./platform-service.controller.js"
import { PlatformServiceService } from "./platform-service.service.js"

@Module({
      imports: [],
      controllers: [PlatformServiceController],
      providers: [PlatformServiceService],
})
export class PlatformServiceModule {}
