import { NestFactory } from '@nestjs/core';
import { EngineeringServiceModule } from './engineering-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(EngineeringServiceModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3003);
}
await bootstrap();
