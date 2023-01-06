import { Module } from '@nestjs/common';
import { CocineroService } from './cocinero.service';
import { CocineroController } from './cocinero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cocinero, CocineroSchema } from './schema/cocinero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cocinero.name,
        schema: CocineroSchema,
      }
    ])
  ],
  controllers: [CocineroController],
  providers: [CocineroService]
})
export class CocineroModule {}
