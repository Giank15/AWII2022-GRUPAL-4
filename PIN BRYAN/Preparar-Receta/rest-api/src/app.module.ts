import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocineroModule } from './cocinero/cocinero.module';
import { RecetaModule } from './receta/receta.module';
import { PreparacionModule } from './preparacion/preparacion.module';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CocineroModule, RecetaModule, PreparacionModule,
  //CONEXION CON MONGODB ATLAS
  MongooseModule.forRoot(
    'mongodb+srv://antonio:a2022@rest-api.8t7tnel.mongodb.net/?retryWrites=true&w=majority',
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
