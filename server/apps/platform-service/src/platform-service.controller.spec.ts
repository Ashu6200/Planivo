import { Test, TestingModule } from "@nestjs/testing"
import { PlatformServiceController } from "./platform-service.controller.js"
import { PlatformServiceService } from "./platform-service.service.js"

describe("PlatformServiceController", () => {
      let platformServiceController: PlatformServiceController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [PlatformServiceController],
                  providers: [PlatformServiceService],
            }).compile()

            platformServiceController =
                  app.get<PlatformServiceController>(PlatformServiceController)
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(platformServiceController.getHello()).toBe("Hello World!")
            })
      })
})
