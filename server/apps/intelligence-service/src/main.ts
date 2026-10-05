import { NestFactory } from '@nestjs/core';
import { IntelligenceServiceModule } from './intelligence-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(IntelligenceServiceModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3005);
}
await bootstrap();
