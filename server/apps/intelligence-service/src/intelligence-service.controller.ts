import { Controller, Get } from "@nestjs/common"
import { IntelligenceServiceService } from "./intelligence-service.service.js"

@Controller()
export class IntelligenceServiceController {
      constructor(private readonly intelligenceServiceService: IntelligenceServiceService) {}

      @Get()
      getHello(): string {
            return this.intelligenceServiceService.getHello()
      }
}
