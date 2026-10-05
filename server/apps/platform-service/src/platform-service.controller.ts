import { Controller, Get } from "@nestjs/common"
import { PlatformServiceService } from "./platform-service.service.js"

@Controller()
export class PlatformServiceController {
      constructor(private readonly platformServiceService: PlatformServiceService) {}

      @Get()
      getHello(): string {
            return this.platformServiceService.getHello()
      }
}
