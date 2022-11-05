///Realizamos las diferentes importanciones necesarias 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
//Realizamos la importacion del modulo de mongoose 
import { MongooseModule } from '@nestjs/mongoose';
import { MeserosModule } from './meseros/meseros.module';
import { PlatosModule } from './platos/platos.module';

//Con este apartado resolvemos el tema de la conexción a mongoDb la cual fue la base de datos seleccionada para está actividad 
@Module({
  //Realizamos las importaciones de los diferentes modulos para el uso y vinculacion de la base de datos 
  imports: [PedidosModule, MongooseModule.forRoot('mongodb+srv://AlexPolanco:alexpolanco@cluster0.rfywjkj.mongodb.net/test',
  ), MeserosModule, PlatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
