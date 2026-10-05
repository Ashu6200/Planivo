import { Module } from "@nestjs/common"
import { WorkServiceController } from "./work-service.controller.js"
import { WorkServiceService } from "./work-service.service.js"

@Module({
      imports: [],
      controllers: [WorkServiceController],
      providers: [WorkServiceService],
})
export class WorkServiceModule {}
