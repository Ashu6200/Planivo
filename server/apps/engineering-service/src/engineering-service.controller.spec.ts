import { Test, TestingModule } from "@nestjs/testing"
import { EngineeringServiceController } from "./engineering-service.controller.js"
import { EngineeringServiceService } from "./engineering-service.service.js"

describe("EngineeringServiceController", () => {
      let engineeringServiceController: EngineeringServiceController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [EngineeringServiceController],
                  providers: [EngineeringServiceService],
            }).compile()

            engineeringServiceController = app.get<EngineeringServiceController>(
                  EngineeringServiceController,
            )
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(engineeringServiceController.getHello()).toBe("Hello World!")
            })
      })
})
