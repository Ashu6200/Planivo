import { NestFactory } from '@nestjs/core';
import { IdentityServiceModule } from './identity-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(IdentityServiceModule);
  await app.listen(process.env.PORT ?? process.env.port ?? 3001);
}
await bootstrap();
