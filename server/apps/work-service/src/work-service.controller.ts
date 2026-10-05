import { Controller, Get } from "@nestjs/common"
import { WorkServiceService } from "./work-service.service.js"

@Controller()
export class WorkServiceController {
      constructor(private readonly workServiceService: WorkServiceService) {}

      @Get()
      getHello(): string {
            return this.workServiceService.getHello()
      }
}
