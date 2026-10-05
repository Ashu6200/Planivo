import { Injectable } from "@nestjs/common"

@Injectable()
export class WorkServiceService {
      getHello(): string {
            return "Hello World!"
      }
}
