import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Proyecto Rest API')
  .setDescription('Esta es la rest api que se utilizará durante todo el proyecto')
  .setVersion('1.0')
  .addTag('REST API')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document);


  await app.listen(3000);
}
bootstrap();
