import { NestFactory } from '@nestjs/core';
import { ApiGatwayModule } from './api-gatway.module.js';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatwayModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3000);
}
await bootstrap();
