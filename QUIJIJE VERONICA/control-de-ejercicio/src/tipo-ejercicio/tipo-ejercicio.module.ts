import { Module } from '@nestjs/common';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { TipoEjercicioController } from './tipo-ejercicio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoEjercicio, TipoEjercicioEsquema } from './entities/tipo-ejercicio.entity';

@Module({
  controllers: [TipoEjercicioController],
  providers: [TipoEjercicioService],
  imports: [MongooseModule.forFeature([{
    name: TipoEjercicio.name,
    schema: TipoEjercicioEsquema
  }])]
})
export class TipoEjercicioModule {}
