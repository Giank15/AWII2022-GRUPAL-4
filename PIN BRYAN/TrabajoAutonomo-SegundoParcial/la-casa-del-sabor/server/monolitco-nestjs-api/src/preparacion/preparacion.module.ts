import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionController } from './preparacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Preparacion, PreparacionSchema } from './schemas/preparacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Preparacion.name,
        schema: PreparacionSchema
      }
    ])
  ],
  controllers: [PreparacionController],
  providers: [PreparacionService]
})
export class PreparacionModule {}
