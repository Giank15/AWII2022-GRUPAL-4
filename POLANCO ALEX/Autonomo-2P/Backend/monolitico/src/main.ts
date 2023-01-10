import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
 const options= new DocumentBuilder()
 .setTitle("Pedidos")
 .setDescription("Este es el servicio rest de pedido a mesero")
 .setVersion("1.0")
 .addTag("Pedidos")
 .build();

const document= SwaggerModule.createDocument(app, options)

  SwaggerModule.setup("api/docs", app, document)

  app.enableCors()
 /*se agrego el validationPipe*/
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}


bootstrap();
