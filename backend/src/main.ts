import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura CORS para permitir cualquier origen
  app.enableCors({
    origin: '*',
  });

  await app.listen(3000); // el puerto escuchando correctamente
}
bootstrap();
