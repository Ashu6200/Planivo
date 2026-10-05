import { Injectable } from "@nestjs/common"

@Injectable()
export class EngineeringServiceService {
      getHello(): string {
            return "Hello World!"
      }
}
