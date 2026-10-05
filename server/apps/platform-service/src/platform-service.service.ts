import { Injectable } from "@nestjs/common"

@Injectable()
export class PlatformServiceService {
      getHello(): string {
            return "Hello World!"
      }
}
