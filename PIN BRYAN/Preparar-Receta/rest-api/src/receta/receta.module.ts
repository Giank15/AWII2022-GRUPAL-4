import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';
import { RecetaSchema } from './schemas/receta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Receta', schema: RecetaSchema },
    ]),
  ],
  controllers: [RecetaController],
  providers: [RecetaService]
})
export class RecetaModule {}
