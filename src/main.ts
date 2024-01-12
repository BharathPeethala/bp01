import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(5000);
}

bootstrap();
