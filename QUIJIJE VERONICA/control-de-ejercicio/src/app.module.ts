import { join } from 'path';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TipoEjercicioModule } from './tipo-ejercicio/tipo-ejercicio.module';
import { DeportistaModule } from './deportista/deportista.module';
import { EjercicioRealizadoModule } from './ejercicio-realizado/ejercicio-realizado.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
      }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TipoEjercicioModule,
    DeportistaModule,
    EjercicioRealizadoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
