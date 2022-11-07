import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionController } from './preparacion.controller';
import { PreparacionSchema } from './schemas/preparacion.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Preparacion', schema: PreparacionSchema },
    ]),
  ],
  providers: [PreparacionService],
  controllers: [PreparacionController]
})
export class PreparacionModule {}
