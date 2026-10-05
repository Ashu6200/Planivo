import { NestFactory } from '@nestjs/core';
import { PlatformServiceModule } from './platform-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(PlatformServiceModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3004);
}
await bootstrap();
