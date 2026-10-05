import { Module } from "@nestjs/common"
import { IdentityServiceController } from "./identity-service.controller.js"
import { IdentityServiceService } from "./identity-service.service.js"

@Module({
      imports: [],
      controllers: [IdentityServiceController],
      providers: [IdentityServiceService],
})
export class IdentityServiceModule {}
