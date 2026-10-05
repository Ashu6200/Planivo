import { Controller, Get } from "@nestjs/common"
import { EngineeringServiceService } from "./engineering-service.service.js"

@Controller()
export class EngineeringServiceController {
      constructor(private readonly engineeringServiceService: EngineeringServiceService) {}

      @Get()
      getHello(): string {
            return this.engineeringServiceService.getHello()
      }
}
