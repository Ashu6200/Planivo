import { NestFactory } from '@nestjs/core';
import { WorkServiceModule } from './work-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(WorkServiceModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3002);
}
await bootstrap();
