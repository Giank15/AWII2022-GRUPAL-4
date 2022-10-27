import { Module } from '@nestjs/common';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { EjercicioRealizadoController } from './ejercicio-realizado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EjercicioRealizado, EjercicioRealizadoEsquema } from './entities/ejercicio-realizado.entity';

@Module({
  controllers: [EjercicioRealizadoController],
  providers: [EjercicioRealizadoService],
  imports: [MongooseModule.forFeature([{
    name: EjercicioRealizado.name,
    schema: EjercicioRealizadoEsquema
  }])]
})
export class EjercicioRealizadoModule {}
