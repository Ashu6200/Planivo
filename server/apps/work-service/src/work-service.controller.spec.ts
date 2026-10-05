import { Test, TestingModule } from "@nestjs/testing"
import { WorkServiceController } from "./work-service.controller.js"
import { WorkServiceService } from "./work-service.service.js"

describe("WorkServiceController", () => {
      let workServiceController: WorkServiceController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [WorkServiceController],
                  providers: [WorkServiceService],
            }).compile()

            workServiceController = app.get<WorkServiceController>(WorkServiceController)
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(workServiceController.getHello()).toBe("Hello World!")
            })
      })
})
