import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ALLOW_ORIGIN || '*',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // Importante si estás usando cookies/sessiones
  });

  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Application is running on Port: ${PORT}`);
}
bootstrap();
