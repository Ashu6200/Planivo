import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGatwayService {
      getHello(): string {
            return "Hello World!"
      }
}
