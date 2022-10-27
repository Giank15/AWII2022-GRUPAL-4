import { Module } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { DeportistaController } from './deportista.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Deportista, DeportistaEsquema } from './entities/deportista.entity';

@Module({
  controllers: [DeportistaController],
  providers: [DeportistaService],
  imports: [MongooseModule.forFeature([{
    name: Deportista.name,
    schema: DeportistaEsquema
  }])]
})
export class DeportistaModule {}
