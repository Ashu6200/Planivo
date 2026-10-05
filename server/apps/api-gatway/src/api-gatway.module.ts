import { Module } from "@nestjs/common"
import { ApiGatwayController } from "./api-gatway.controller.js"
import { ApiGatwayService } from "./api-gatway.service.js"

@Module({
      imports: [],
      controllers: [ApiGatwayController],
      providers: [ApiGatwayService],
})
export class ApiGatwayModule {}
