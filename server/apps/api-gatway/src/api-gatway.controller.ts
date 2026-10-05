import { Controller, Get } from "@nestjs/common"
import { ApiGatwayService } from "./api-gatway.service.js"

@Controller()
export class ApiGatwayController {
      constructor(private readonly apiGatwayService: ApiGatwayService) {}

      @Get()
      getHello(): string {
            return this.apiGatwayService.getHello()
      }
}
