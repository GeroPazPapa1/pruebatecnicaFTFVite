import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura CORS para permitir solicitudes desde el origen del frontend
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
