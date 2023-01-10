import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Control de Propina')
    .setDescription('Descripcion del funcionamiento del API')
    .setVersion('0.0')
    .addTag('')
    .build();

  const documento = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documento);
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
