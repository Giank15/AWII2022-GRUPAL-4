import { Module } from '@nestjs/common';
import { CocineroController } from './cocinero.controller';
import { CocineroService } from './cocinero.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CocineroSchema } from './schemas/cocinero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cocinero', schema: CocineroSchema },
    ]),
  ],
  providers: [CocineroService],
  controllers: [CocineroController]
})
export class CocineroModule {}
