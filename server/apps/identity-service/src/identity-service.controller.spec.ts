import { Test, TestingModule } from "@nestjs/testing"
import { IdentityServiceController } from "./identity-service.controller.js"
import { IdentityServiceService } from "./identity-service.service.js"

describe("IdentityServiceController", () => {
      let identityServiceController: IdentityServiceController

      beforeEach(async () => {
            const app: TestingModule = await Test.createTestingModule({
                  controllers: [IdentityServiceController],
                  providers: [IdentityServiceService],
            }).compile()

            identityServiceController =
                  app.get<IdentityServiceController>(IdentityServiceController)
      })

      describe("root", () => {
            it('should return "Hello World!"', () => {
                  expect(identityServiceController.getHello()).toBe("Hello World!")
            })
      })
})
