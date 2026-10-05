import { Test, TestingModule } from "@nestjs/testing"
import { IntelligenceServiceController } from "./intelligence-service.controller.js"
import { IntelligenceServiceService } from "./intelligence-service.service.js"

describe("IntelligenceServiceController", () => {
      let intelligenceServiceController: IntelligenceServiceController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [IntelligenceServiceController],
                  providers: [IntelligenceServiceService],
            }).compile()

            intelligenceServiceController = app.get<IntelligenceServiceController>(
                  IntelligenceServiceController,
            )
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(intelligenceServiceController.getHello()).toBe("Hello World!")
            })
      })
})
