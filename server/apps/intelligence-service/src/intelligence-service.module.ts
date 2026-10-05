import { Module } from "@nestjs/common"
import { IntelligenceServiceController } from "./intelligence-service.controller.js"
import { IntelligenceServiceService } from "./intelligence-service.service.js"

@Module({
      imports: [],
      controllers: [IntelligenceServiceController],
      providers: [IntelligenceServiceService],
})
export class IntelligenceServiceModule {}
