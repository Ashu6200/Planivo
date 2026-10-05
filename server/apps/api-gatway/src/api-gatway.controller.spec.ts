import { Test, TestingModule } from "@nestjs/testing"
import { ApiGatwayController } from "./api-gatway.controller.js"
import { ApiGatwayService } from "./api-gatway.service.js"

describe("ApiGatwayController", () => {
      let apiGatwayController: ApiGatwayController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [ApiGatwayController],
                  providers: [ApiGatwayService],
            }).compile()

            apiGatwayController = app.get<ApiGatwayController>(ApiGatwayController)
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(apiGatwayController.getHello()).toBe("Hello World!")
            })
      })
})
