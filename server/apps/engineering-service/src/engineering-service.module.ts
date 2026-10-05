import { Module } from "@nestjs/common"
import { EngineeringServiceController } from "./engineering-service.controller.js"
import { EngineeringServiceService } from "./engineering-service.service.js"

@Module({
      imports: [],
      controllers: [EngineeringServiceController],
      providers: [EngineeringServiceService],
})
export class EngineeringServiceModule {}
