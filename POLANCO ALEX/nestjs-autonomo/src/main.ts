//Nombre:Polanco Briones Alex Javier 
//Curso: 6to "B"
//Tema: Trabajo Aútonomo - Servicio Rest


//Uno de los apartados del cumplimiento de la actividad pedia el alojamiento del código en un hosting 
//Sitio Web en vivo: https://nestjs-autonomo-alex-polanco.glitch.me
//codigo: https://glitch.com/edit/#!/nestjs-autonomo-alex-polanco
//Realizamos las importaciones necesarias 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//En este apartado hacemos referencia al suo de swagger, como método de documentación del servicio Rest
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options=new DocumentBuilder()
  .setTitle("Pedido a mesero")
  .setDescription("Servicio rest de pedido a mesero")
  .setVersion("1.0")
  .addTag("pedidos")
  .build();

  const document=SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api/docs", app, document,{
    explorer: true,
    swaggerOptions: {
      filter:true,
      showRequestDuration: true,
    }
  });
///  
  await app.listen(3000);
}
bootstrap();

//Nota: La carpeta src, contiene los archivos principales del cumplimiento de las actividades, tales como la creación de las 3 entidades asignadas por el docente entre otrras 
//Nota: Los cometarios realizados en el código se han limitado a las entidades meseros y pedidos, puesto que al igual que la entidad
//platos, comparten los mismos métodos de consulta e interacción, por otro lado sus datos y contenido de dichas entidades en diferente y se 
//complementan para realizar el pedido a un mesero 

//IMPORTANTE: por tema de espacio al subir codigo, el estudiante decidio divir en carpetas el código de nestjs por lo cual no contiene una 
//estructura clásica de dicho framework, al desear que todos los archivos esten se los separo segun el numero de archivos permitidos por commits en GitHub
//Debido a ello se decidio añadir pruebas de funcionamiento, espero se pueda comprender, la carpeta src contiene los apartados del cumplimiento de las actividades